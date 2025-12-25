import nodemailer from 'nodemailer';

interface EmailData {
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }>;
}

export async function sendEmail({ to, subject, html, attachments }: EmailData): Promise<boolean> {
  try {
    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Jo Eve Smart Solutions" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      attachments,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

export function generateROIReportEmail(
  recipientName: string,
  downloadLink: string,
  surveyData: any
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Digital Marketing ROI Analysis Report</title>
      <style>
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8fafc;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: white;
          padding: 2rem;
          text-align: center;
        }
        .header h1 {
          margin: 0 0 0.5rem 0;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .header p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.9rem;
        }
        .content {
          padding: 2rem;
        }
        .section {
          margin-bottom: 1.5rem;
        }
        .section h2 {
          color: #1e40af;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .highlight-box {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          margin: 1.5rem 0;
        }
        .highlight-box h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
        }
        .highlight-box p {
          margin: 0;
          font-size: 2rem;
          font-weight: 700;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          text-align: center;
          margin: 1.5rem 0;
          transition: transform 0.2s ease;
        }
        .cta-button:hover {
          transform: translateY(-2px);
        }
        .footer {
          background: #f1f5f9;
          padding: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: #64748b;
        }
        .social-links {
          margin-top: 1rem;
        }
        .social-links a {
          color: #64748b;
          text-decoration: none;
          margin: 0 0.5rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1.5rem 0;
        }
        .stat-box {
          background: #f8fafc;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          border: 1px solid #e2e8f0;
        }
        .stat-box h4 {
          color: #1e40af;
          margin: 0 0 0.5rem 0;
          font-size: 0.9rem;
        }
        .stat-box p {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: #059669;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 Your ROI Analysis Report is Ready!</h1>
          <p>Personalized insights for your business growth</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h2>Hi ${recipientName},</h2>
            <p>Thank you for completing our Digital Marketing ROI Calculator! We've analyzed your responses and created a comprehensive report with personalized recommendations.</p>
          </div>

          <div class="highlight-box">
            <h3>Your Estimated ROI</h3>
            <p>${surveyData?.calculation?.estimatedROI?.toFixed(0) || '200'}%</p>
          </div>

          <div class="stats-grid">
            <div class="stat-box">
              <h4>Monthly Savings</h4>
              <p>RM ${surveyData?.calculation?.monthlySavings?.toLocaleString() || '5,000'}</p>
            </div>
            <div class="stat-box">
              <h4>Payback Period</h4>
              <p>${surveyData?.calculation?.paybackPeriod || '3'} months</p>
            </div>
          </div>

          <div class="section">
            <h2>📊 What's Inside Your Report</h2>
            <ul style="color: #475569; margin-left: 0; padding-left: 1.5rem;">
              <li>Detailed ROI analysis and projections</li>
              <li>Implementation roadmap with timelines</li>
              <li>Cost-benefit breakdown and savings calculations</li>
              <li>Recommended next steps and strategies</li>
              <li>Industry benchmarks and comparisons</li>
            </ul>
          </div>

          <div style="text-align: center;">
            <a href="${downloadLink}" class="cta-button" style="color: white;">
              📥 Download Your Report
            </a>
          </div>

          <div class="section">
            <h2>🎯 Next Steps</h2>
            <p>Ready to implement these recommendations? Our team is here to help:</p>
            <ol style="color: #475569; margin-left: 0; padding-left: 1.5rem;">
              <li>Review your personalized report</li>
              <li>Schedule a free consultation call</li>
              <li>Get a custom implementation plan</li>
              <li>Start with our 30-day satisfaction guarantee</li>
            </ol>
          </div>

          <div class="section">
            <h2>💡 Quick Win Opportunities</h2>
            <p>Based on your survey responses, here are some immediate actions you can take:</p>
            <ul style="color: #475569; margin-left: 0; padding-left: 1.5rem;">
              <li>Implement AI-powered lead generation tools</li>
              <li>Set up automated email marketing sequences</li>
              <li>Deploy chatbot for 24/7 customer engagement</li>
              <li>Launch targeted social media campaigns</li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <p>Jo Eve Smart Solutions | Transforming Malaysian Businesses with AI</p>
          <div class="social-links">
            <a href="https://joevesmartsolutions.com">Website</a> |
            <a href="mailto:hello@joevesmartsolutions.com">Email</a> |
            <a href="tel:+60123456789">Phone: +60 123-456-789</a>
          </div>
          <p style="margin-top: 1rem; font-size: 0.7rem;">
            This report is confidential and intended solely for the recipient. 
            If you received this in error, please delete it immediately.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function generateDevelopmentGuideEmail(
  recipientName: string,
  downloadLink: string,
  surveyData: any
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Web App Development Guide</title>
      <style>
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8fafc;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
          color: white;
          padding: 2rem;
          text-align: center;
        }
        .header h1 {
          margin: 0 0 0.5rem 0;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .header p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.9rem;
        }
        .content {
          padding: 2rem;
        }
        .section {
          margin-bottom: 1.5rem;
        }
        .section h2 {
          color: #6d28d9;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .tech-stack {
          background: #f3f4f6;
          padding: 1rem;
          border-radius: 8px;
          margin: 1rem 0;
        }
        .tech-item {
          display: inline-block;
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          margin: 0.25rem;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          text-align: center;
          margin: 1.5rem 0;
          transition: transform 0.2s ease;
        }
        .cta-button:hover {
          transform: translateY(-2px);
        }
        .footer {
          background: #f1f5f9;
          padding: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: #64748b;
        }
        .timeline {
          background: #f3f4f6;
          padding: 1rem;
          border-radius: 8px;
          margin: 1rem 0;
        }
        .timeline-item {
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
        }
        .timeline-item::before {
          content: "•";
          color: #8b5cf6;
          position: absolute;
          left: 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🛠️ Your Web App Development Guide is Ready!</h1>
          <p>Personalized technology recommendations and roadmap</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h2>Hi ${recipientName},</h2>
            <p>Thank you for completing our Web App Development Assessment! We've analyzed your project requirements and created a comprehensive development guide tailored to your specific needs.</p>
          </div>

          <div class="section">
            <h2>🎯 Your Project Summary</h2>
            <p><strong>Project Scope:</strong> ${surveyData?.projectScope === 'simple' ? 'Simple Website' : surveyData?.projectScope === 'moderate' ? 'Business Application' : surveyData?.projectScope === 'complex' ? 'Enterprise Solution' : 'Innovative Platform'}</p>
            <p><strong>Estimated Timeline:</strong> ${surveyData?.recommendations?.estimatedTimeline || '3-6 months'}</p>
            <p><strong>Budget Range:</strong> ${surveyData?.recommendations?.budgetEstimate || 'RM 25,000 - RM 50,000'}</p>
          </div>

          <div class="section">
            <h2>🚀 Recommended Technology Stack</h2>
            <div class="tech-stack">
              ${surveyData?.recommendations?.technologyStack?.map((tech: string) => `<span class="tech-item">${tech}</span>`).join('') || '<span class="tech-item">React.js</span><span class="tech-item">Node.js</span><span class="tech-item">PostgreSQL</span>'}
            </div>
          </div>

          <div class="section">
            <h2>📋 Development Roadmap</h2>
            <div class="timeline">
              <div class="timeline-item"><strong>Phase 1:</strong> Planning & Design (Week 1-2)</div>
              <div class="timeline-item"><strong>Phase 2:</strong> Core Development (Week 3-8)</div>
              <div class="timeline-item"><strong>Phase 3:</strong> Advanced Features (Week 9-12)</div>
              <div class="timeline-item"><strong>Phase 4:</strong> Testing & Deployment (Week 13-16)</div>
            </div>
          </div>

          <div style="text-align: center;">
            <a href="${downloadLink}" class="cta-button" style="color: white;">
              📥 Download Your Guide
            </a>
          </div>

          <div class="section">
            <h2>🎯 What's Inside Your Guide</h2>
            <ul style="color: #475569; margin-left: 0; padding-left: 1.5rem;">
              <li>Detailed technology stack recommendations</li>
              <li>Step-by-step development roadmap</li>
              <li>Budget breakdown and cost estimates</li>
              <li>Risk assessment and mitigation strategies</li>
              <li>Success metrics and KPIs</li>
              <li>Team structure and resource requirements</li>
            </ul>
          </div>

          <div class="section">
            <h2>⚡ Risk Assessment</h2>
            <p><strong>Risk Level:</strong> ${surveyData?.recommendations?.riskLevel || 'Low'}</p>
            <p><strong>Recommended Approach:</strong> ${surveyData?.recommendations?.recommendedApproach || 'Agile Development'}</p>
          </div>

          <div class="section">
            <h2>🚀 Next Steps</h2>
            <ol style="color: #475569; margin-left: 0; padding-left: 1.5rem;">
              <li>Review your personalized development guide</li>
              <li>Schedule a technical consultation call</li>
              <li>Get a detailed project proposal</li>
              <li>Start development with our proven methodology</li>
            </ol>
          </div>

          <div class="section">
            <h2>💡 Pro Tips</h2>
            <ul style="color: #475569; margin-left: 0; padding-left: 1.5rem;">
              <li>Start with an MVP to validate your concept</li>
              <li>Focus on user experience from day one</li>
              <li>Plan for scalability from the beginning</li>
              <li>Invest in proper testing and quality assurance</li>
              <li>Consider maintenance and support from the start</li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <p>Jo Eve Smart Solutions | Expert Web Application Development</p>
          <div class="social-links">
            <a href="https://joevesmartsolutions.com">Website</a> |
            <a href="mailto:hello@joevesmartsolutions.com">Email</a> |
            <a href="tel:+60123456789">Phone: +60 123-456-789</a>
          </div>
          <p style="margin-top: 1rem; font-size: 0.7rem;">
            This guide is confidential and intended solely for the recipient. 
            If you received this in error, please delete it immediately.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}