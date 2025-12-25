import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendEmail, generateDevelopmentGuideEmail } from '@/lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectScope, budgetRange, timelineUrgency, technicalRequirements, teamSize, email, recommendations, survey_type } = body;

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
          projectScope,
          budgetRange,
          timelineUrgency,
          technicalRequirements,
          teamSize,
          recommendations
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
      { question_key: 'project_scope', answer_value: { value: projectScope } },
      { question_key: 'budget_range', answer_value: { value: budgetRange } },
      { question_key: 'timeline_urgency', answer_value: { value: timelineUrgency } },
      { question_key: 'technical_requirements', answer_value: { value: technicalRequirements } },
      { question_key: 'team_size', answer_value: { value: teamSize } }
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
    const emailSubject = '🛠️ Your Web App Development Guide is Ready!';
    const emailHtml = generateDevelopmentGuideEmail(
      email.split('@')[0], // Use email username as name
      downloadLink,
      { recommendations }
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