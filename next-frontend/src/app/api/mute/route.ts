import { NextRequest, NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userAddress, targetUserAddress, targetGroupId, mute, muteType } = await request.json();

    // Validate required parameters
    if (!userAddress || !muteType || (muteType === 'user' && !targetUserAddress) || 
        (muteType === 'group' && !targetGroupId)) {
      return NextResponse.json(
        { error: 'Missing required parameters' }, 
        { status: 400 }
      );
    }

    // Validate Ethereum address format
    const addressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!addressRegex.test(userAddress)) {
      return NextResponse.json(
        { error: 'Invalid user address format' }, 
        { status: 400 }
      );
    }

    if (targetUserAddress && !addressRegex.test(targetUserAddress)) {
      return NextResponse.json(
        { error: 'Invalid target user address format' }, 
        { status: 400 }
      );
    }

    const db = await getDbConnection();

    // Check if mute setting already exists
    const existingSettingQuery = muteType === 'user' 
      ? 'SELECT id, is_muted FROM mute_settings WHERE user_address = ? AND muted_user_address = ? AND mute_type = ?'
      : 'SELECT id, is_muted FROM mute_settings WHERE user_address = ? AND muted_group_id = ? AND mute_type = ?';
    
    const existingParams = muteType === 'user' 
      ? [userAddress, targetUserAddress, muteType]
      : [userAddress, targetGroupId, muteType];

    const [existingSetting] = await db.execute(existingSettingQuery, existingParams);

    if (existingSetting.length > 0) {
      // Update existing setting
      const updateQuery = 'UPDATE mute_settings SET is_muted = ? WHERE id = ?';
      await db.execute(updateQuery, [mute ? 1 : 0, existingSetting[0].id]);
    } else if (mute) {
      // Create new setting only if we're muting (not unmuting)
      const insertQuery = muteType === 'user'
        ? 'INSERT INTO mute_settings (user_address, muted_user_address, mute_type, is_muted) VALUES (?, ?, ?, 1)'
        : 'INSERT INTO mute_settings (user_address, muted_group_id, mute_type, is_muted) VALUES (?, ?, ?, 1)';
      
      const insertParams = muteType === 'user'
        ? [userAddress, targetUserAddress, muteType]
        : [userAddress, targetGroupId, muteType];

      await db.execute(insertQuery, insertParams);
    }

    await db.end();

    return NextResponse.json({
      success: true,
      message: mute ? 'Successfully muted' : 'Successfully unmuted',
      data: {
        userAddress,
        targetUserAddress,
        targetGroupId,
        muteType,
        isMuted: mute
      }
    });

  } catch (error) {
    console.error('Error in mute API:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}