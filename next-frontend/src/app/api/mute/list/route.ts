import { NextRequest, NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userAddress = searchParams.get('userAddress');
    const muteType = searchParams.get('muteType'); // Optional filter: 'user' or 'group'

    if (!userAddress) {
      return NextResponse.json(
        { error: 'userAddress parameter is required' }, 
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

    if (muteType && !['user', 'group'].includes(muteType)) {
      return NextResponse.json(
        { error: 'muteType must be either "user" or "group"' }, 
        { status: 400 }
      );
    }

    const db = await getDbConnection();

    let query = `
      SELECT 
        id,
        user_address,
        muted_user_address,
        muted_group_id,
        mute_type,
        muted_at,
        is_muted
      FROM mute_settings 
      WHERE user_address = ? AND is_muted = 1
    `;
    const params = [userAddress];

    if (muteType) {
      query += ' AND mute_type = ?';
      params.push(muteType);
    }

    query += ' ORDER BY muted_at DESC';

    const [muteSettings] = await db.execute(query, params);
    await db.end();

    // Transform the data for easier consumption
    const transformedSettings = muteSettings.map((setting: any) => ({
      id: setting.id,
      userAddress: setting.user_address,
      mutedTarget: setting.mute_type === 'user' ? setting.muted_user_address : setting.muted_group_id,
      targetType: setting.mute_type,
      mutedAt: setting.muted_at,
      isMuted: setting.is_muted === 1
    }));

    return NextResponse.json({
      success: true,
      data: {
        userAddress,
        muteType: muteType || null,
        count: transformedSettings.length,
        settings: transformedSettings
      }
    });

  } catch (error) {
    console.error('Error in mute list API:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}