import { NextRequest, NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userAddress = searchParams.get('userAddress');
    const targetUserAddress = searchParams.get('targetUserAddress');
    const targetGroupId = searchParams.get('targetGroupId');

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

    if (targetUserAddress && !addressRegex.test(targetUserAddress)) {
      return NextResponse.json(
        { error: 'Invalid target user address format' }, 
        { status: 400 }
      );
    }

    const db = await getDbConnection();

    let query = 'SELECT * FROM mute_settings WHERE user_address = ? AND is_muted = 1';
    const params = [userAddress];

    if (targetUserAddress) {
      query += ' AND muted_user_address = ? AND mute_type = "user"';
      params.push(targetUserAddress);
    } else if (targetGroupId) {
      query += ' AND muted_group_id = ? AND mute_type = "group"';
      params.push(targetGroupId);
    }

    const [muteSettings] = await db.execute(query, params);
    await db.end();

    let isMuted = false;
    let muteSetting = null;

    if (muteSettings.length > 0) {
      muteSetting = muteSettings[0];
      isMuted = muteSetting.is_muted === 1;
    }

    return NextResponse.json({
      success: true,
      data: {
        userAddress,
        targetUserAddress,
        targetGroupId,
        isMuted,
        muteSetting
      }
    });

  } catch (error) {
    console.error('Error in mute check API:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}