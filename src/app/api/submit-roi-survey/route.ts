import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendEmail, generateROIReportEmail } from '@/lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companySize, currentMonthlyCost, targetImprovement, timelineMonths, email, calculation, survey_type } = body;

    // Validate required fields
    if (!email || !survey_type) {
      return NextResponse.json(
        { error: 'Email and survey type are required' },
        { status: 400 }
      );
    }

    // Create survey response
    const { data: surveyResponse, error: surveyError } = await supabase
      .from('survey_responses')
      .insert({
        survey_type,
        email,
        metadata: {
          companySize,
          currentMonthlyCost,
          targetImprovement,
          timelineMonths,
          calculation
        },
        completed: true
      })
      .select()
      .single();

    if (surveyError) {
      console.error('Survey response error:', surveyError);
      return NextResponse.json(
        { error: 'Failed to save survey response' },
        { status: 500 }
      );
    }

    // Create survey answers
    const surveyAnswers = [
      { question_key: 'company_size', answer_value: { value: companySize } },
      { question_key: 'current_monthly_cost', answer_value: { value: currentMonthlyCost } },
      { question_key: 'target_improvement', answer_value: { value: targetImprovement } },
      { question_key: 'timeline_months', answer_value: { value: timelineMonths } }
    ];

    const { error: answersError } = await supabase
      .from('survey_answers')
      .insert(
        surveyAnswers.map(answer => ({
          survey_id: surveyResponse.id,
          question_key: answer.question_key,
          answer_value: answer.answer_value
        }))
      );

    if (answersError) {
      console.error('Survey answers error:', answersError);
      // Continue even if answers fail - the main response is saved
    }

    // Generate download token
    const token = generateToken();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const { error: tokenError } = await supabase
      .from('download_tokens')
      .insert({
        survey_id: surveyResponse.id,
        token,
        expires_at: expiresAt.toISOString()
      });

    if (tokenError) {
      console.error('Download token error:', tokenError);
      return NextResponse.json(
        { error: 'Failed to create download token' },
        { status: 500 }
      );
    }

    // Generate download link
    const downloadLink = `${process.env.NEXT_PUBLIC_APP_URL || 'https://joevesmartsolutions.com'}/tools/download-center?token=${token}`;
    
    // Send email with download link
    const emailSubject = '🚀 Your Digital Marketing ROI Analysis Report is Ready!';
    const emailHtml = generateROIReportEmail(
      email.split('@')[0], // Use email username as name
      downloadLink,
      { calculation }
    );
    
    const emailSent = await sendEmail({
      to: email,
      subject: emailSubject,
      html: emailHtml
    });

    if (!emailSent) {
      console.error('Failed to send email notification');
      // Continue even if email fails - the survey was saved successfully
    }

    return NextResponse.json({
      success: true,
      survey_id: surveyResponse.id,
      download_token: token,
      estimated_roi: calculation?.estimatedROI || 0,
      email_sent: emailSent
    });

  } catch (error) {
    console.error('Survey submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}