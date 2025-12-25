import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }

    // Verify token exists and is not expired
    const { data: tokenData, error: tokenError } = await supabase
      .from('download_tokens')
      .select(`
        *,
        survey_responses (
          id,
          email,
          survey_type,
          metadata,
          created_at
        )
      `)
      .eq('token', token)
      .single();

    if (tokenError || !tokenData) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 404 }
      );
    }

    // Check if token is expired
    if (new Date(tokenData.expires_at) < new Date()) {
      return NextResponse.json(
        { error: 'Token has expired' },
        { status: 410 }
      );
    }

    // Generate mock download data for now
    // In production, this would come from storage or generated reports
    const downloads = [
      {
        id: tokenData.id,
        title: tokenData.survey_responses.survey_type === 'roi_calculator' 
          ? 'Digital Marketing ROI Analysis Report'
          : 'Web App Development Guide',
        description: tokenData.survey_responses.survey_type === 'roi_calculator'
          ? 'Comprehensive ROI analysis with detailed recommendations and implementation roadmap'
          : 'Personalized development guide with technology recommendations and best practices',
        fileUrl: `/api/generate-report?survey_id=${tokenData.survey_id}&token=${token}`,
        fileSize: tokenData.survey_responses.survey_type === 'roi_calculator' ? '2.5 MB' : '3.2 MB',
        downloadCount: tokenData.download_count || 0,
        createdAt: tokenData.survey_responses.created_at,
        expiresAt: tokenData.expires_at,
        isExpired: false
      }
    ];

    return NextResponse.json({
      success: true,
      downloads
    });

  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}