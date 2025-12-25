import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Get survey responses for this email
    const { data: surveyResponses, error: surveysError } = await supabase
      .from('survey_responses')
      .select(`
        id,
        survey_type,
        created_at,
        metadata
      `)
      .eq('email', email)
      .eq('completed', true)
      .order('created_at', { ascending: false });

    if (surveysError) {
      console.error('Survey fetch error:', surveysError);
      return NextResponse.json(
        { error: 'Failed to fetch surveys' },
        { status: 500 }
      );
    }

    if (!surveyResponses || surveyResponses.length === 0) {
      return NextResponse.json(
        { error: 'No surveys found for this email' },
        { status: 404 }
      );
    }

    // Get download tokens for these surveys
    const surveyIds = surveyResponses.map(response => response.id);
    const { data: downloadTokens, error: tokensError } = await supabase
      .from('download_tokens')
      .select(`
        id,
        survey_id,
        token,
        expires_at,
        used,
        used_at
      `)
      .in('survey_id', surveyIds)
      .order('created_at', { ascending: false });

    if (tokensError) {
      console.error('Token fetch error:', tokensError);
      return NextResponse.json(
        { error: 'Failed to fetch download tokens' },
        { status: 500 }
      );
    }

    // Generate download data
    const downloads = surveyResponses.map(response => {
      const token = downloadTokens?.find(t => t.survey_id === response.id);
      const isExpired = token ? new Date(token.expires_at) < new Date() : true;

      return {
        id: response.id,
        title: response.survey_type === 'roi_calculator' 
          ? 'Digital Marketing ROI Analysis Report'
          : 'Web App Development Guide',
        description: response.survey_type === 'roi_calculator'
          ? 'Comprehensive ROI analysis with detailed recommendations and implementation roadmap'
          : 'Personalized development guide with technology recommendations and best practices',
        fileUrl: token ? `/api/generate-report?survey_id=${response.id}&token=${token.token}` : '',
        fileSize: response.survey_type === 'roi_calculator' ? '2.5 MB' : '3.2 MB',
        downloadCount: token?.used ? 1 : 0,
        createdAt: response.created_at,
        expiresAt: token?.expires_at || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        isExpired: isExpired
      };
    }).filter(download => download.fileUrl); // Only include downloads with tokens

    return NextResponse.json({
      success: true,
      downloads
    });

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}