import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { downloadId } = body;

    if (!downloadId) {
      return NextResponse.json(
        { error: 'Download ID is required' },
        { status: 400 }
      );
    }

    // Update download token as used
    const { error } = await supabase
      .from('download_tokens')
      .update({
        used: true,
        used_at: new Date().toISOString()
      })
      .eq('id', downloadId);

    if (error) {
      console.error('Download tracking error:', error);
      return NextResponse.json(
        { error: 'Failed to track download' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Download tracked successfully'
    });

  } catch (error) {
    console.error('Download tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}