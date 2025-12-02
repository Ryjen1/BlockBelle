-- Database schema for mute functionality
-- This migration adds support for muting individual users and group chats

-- Create mute settings table
CREATE TABLE IF NOT EXISTS mute_settings (
    id SERIAL PRIMARY KEY,
    user_address VARCHAR(42) NOT NULL, -- Ethereum address of the user who set the mute
    muted_user_address VARCHAR(42) NULL, -- NULL for group mutes, specific user for user mutes
    muted_group_id VARCHAR(255) NULL, -- NULL for user mutes, specific group for group mutes
    mute_type VARCHAR(20) NOT NULL CHECK (mute_type IN ('user', 'group')),
    muted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_muted BOOLEAN DEFAULT TRUE,
    UNIQUE(user_address, muted_user_address, muted_group_id, mute_type)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_mute_settings_user_address ON mute_settings(user_address);
CREATE INDEX IF NOT EXISTS idx_mute_settings_muted_user ON mute_settings(muted_user_address);
CREATE INDEX IF NOT EXISTS idx_mute_settings_muted_group ON mute_settings(muted_group_id);
CREATE INDEX IF NOT EXISTS idx_mute_settings_type ON mute_settings(mute_type);
CREATE INDEX IF NOT EXISTS idx_mute_settings_is_muted ON mute_settings(is_muted);

-- Add comments for documentation
COMMENT ON TABLE mute_settings IS 'Stores mute settings for users and group chats';
COMMENT ON COLUMN mute_settings.user_address IS 'The user who set the mute (Ethereum address)';
COMMENT ON COLUMN mute_settings.muted_user_address IS 'The user being muted (NULL for group mutes)';
COMMENT ON COLUMN mute_settings.muted_group_id IS 'The group being muted (NULL for user mutes)';
COMMENT ON COLUMN mute_settings.mute_type IS 'Type of mute: user or group';
COMMENT ON COLUMN mute_settings.is_muted IS 'Whether the mute is currently active';

-- Create a function to check if a user/group is muted
CREATE OR REPLACE FUNCTION is_user_muted(
    user_addr VARCHAR(42),
    target_user_addr VARCHAR(42),
    target_group_id VARCHAR(255)
) RETURNS BOOLEAN AS $$
BEGIN
    -- Check for user mute
    IF target_user_addr IS NOT NULL THEN
        RETURN EXISTS (
            SELECT 1 FROM mute_settings 
            WHERE user_address = user_addr 
            AND muted_user_address = target_user_addr 
            AND mute_type = 'user' 
            AND is_muted = TRUE
        );
    END IF;
    
    -- Check for group mute
    IF target_group_id IS NOT NULL THEN
        RETURN EXISTS (
            SELECT 1 FROM mute_settings 
            WHERE user_address = user_addr 
            AND muted_group_id = target_group_id 
            AND mute_type = 'group' 
            AND is_muted = TRUE
        );
    END IF;
    
    RETURN FALSE;
END;
$$ LANGUAGE plpgsql;

-- Create a function to mute/unmute a user
CREATE OR REPLACE FUNCTION toggle_user_mute(
    user_addr VARCHAR(42),
    target_user_addr VARCHAR(42),
    mute BOOLEAN DEFAULT TRUE
) RETURNS BOOLEAN AS $$
BEGIN
    IF mute THEN
        INSERT INTO mute_settings (user_address, muted_user_address, mute_type, is_muted)
        VALUES (user_addr, target_user_addr, 'user', TRUE)
        ON CONFLICT (user_address, muted_user_address, muted_group_id, mute_type)
        DO UPDATE SET is_muted = TRUE;
    ELSE
        UPDATE mute_settings 
        SET is_muted = FALSE 
        WHERE user_address = user_addr 
        AND muted_user_address = target_user_addr 
        AND mute_type = 'user';
    END IF;
    
    RETURN mute;
END;
$$ LANGUAGE plpgsql;

-- Create a function to mute/unmute a group
CREATE OR REPLACE FUNCTION toggle_group_mute(
    user_addr VARCHAR(42),
    target_group_id VARCHAR(255),
    mute BOOLEAN DEFAULT TRUE
) RETURNS BOOLEAN AS $$
BEGIN
    IF mute THEN
        INSERT INTO mute_settings (user_address, muted_group_id, mute_type, is_muted)
        VALUES (user_addr, target_group_id, 'group', TRUE)
        ON CONFLICT (user_address, muted_user_address, muted_group_id, mute_type)
        DO UPDATE SET is_muted = TRUE;
    ELSE
        UPDATE mute_settings 
        SET is_muted = FALSE 
        WHERE user_address = user_addr 
        AND muted_group_id = target_group_id 
        AND mute_type = 'group';
    END IF;
    
    RETURN mute;
END;
$$ LANGUAGE plpgsql;