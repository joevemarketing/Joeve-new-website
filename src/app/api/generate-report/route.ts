import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const surveyId = searchParams.get('survey_id');
    const token = searchParams.get('token');

    if (!surveyId || !token) {
      return NextResponse.json(
        { error: 'Survey ID and token are required' },
        { status: 400 }
      );
    }

    // Verify token
    const { data: tokenData, error: tokenError } = await supabase
      .from('download_tokens')
      .select(`
        *,
        survey_responses (
          id,
          survey_type,
          email,
          metadata,
          created_at
        )
      `)
      .eq('token', token)
      .eq('survey_id', surveyId)
      .single();

    if (tokenError || !tokenData) {
      return NextResponse.json(
        { error: 'Invalid token' },
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

    // Generate report content based on survey type
    const surveyData = tokenData.survey_responses;
    let reportContent = '';

    if (surveyData.survey_type === 'roi_calculator') {
      reportContent = generateROIReport(surveyData.metadata, surveyData.created_at);
    } else if (surveyData.survey_type === 'web_app_guide') {
      reportContent = generateDevelopmentGuide(surveyData.metadata, surveyData.created_at);
    }

    // For now, return the report content as JSON
    // In production, you would generate a PDF and return it
    return NextResponse.json({
      success: true,
      report: reportContent,
      survey_type: surveyData.survey_type,
      generated_at: new Date().toISOString()
    });

  } catch (error) {
    console.error('Report generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateROIReport(metadata: any, createdAt: string): string {
  const { companySize, currentMonthlyCost, targetImprovement, timelineMonths, calculation } = metadata;
  
  return `
# Digital Marketing ROI Analysis Report

**Generated on:** ${new Date(createdAt).toLocaleDateString()}

## Executive Summary

Based on your survey responses, we have analyzed your digital marketing potential and calculated the expected return on investment from implementing AI-powered marketing solutions.

## Survey Results

**Company Size:** ${companySize === 'small' ? 'Small (1-10 employees)' : companySize === 'medium' ? 'Medium (11-50 employees)' : 'Large (50+ employees)'}

**Current Monthly Marketing Cost:** RM ${currentMonthlyCost}

**Primary Improvement Goal:** ${targetImprovement === 'leads' ? 'Lead Generation' : targetImprovement === 'conversion' ? 'Conversion Rate' : targetImprovement === 'efficiency' ? 'Marketing Efficiency' : 'Process Automation'}

**Implementation Timeline:** ${timelineMonths} months

## ROI Analysis

**Estimated ROI:** ${calculation?.estimatedROI?.toFixed(0) || '0'}%

**Monthly Savings:** RM ${calculation?.monthlySavings?.toLocaleString() || '0'}

**Annual Savings:** RM ${calculation?.annualSavings?.toLocaleString() || '0'}

**Payback Period:** ${calculation?.paybackPeriod || '0'} months

## Key Recommendations

1. **Immediate Actions (Month 1-2)**
   - Implement AI-powered lead generation tools
   - Set up automated email marketing sequences
   - Deploy chatbot for 24/7 customer engagement

2. **Medium-term Strategy (Month 3-6)**
   - Launch targeted social media campaigns with AI optimization
   - Implement conversion rate optimization tools
   - Set up comprehensive analytics and tracking

3. **Long-term Growth (Month 6+)**
   - Scale successful campaigns based on data insights
   - Expand to new marketing channels
   - Implement advanced automation workflows

## Expected Outcomes

With our AI-powered marketing solutions, you can expect:
- 40-50% improvement in lead generation
- 25-35% increase in conversion rates
- 30-40% reduction in marketing costs
- 24/7 automated customer engagement

## Next Steps

1. **Schedule a Consultation**: Book a free 30-minute strategy call with our team
2. **Custom Implementation Plan**: Get a detailed roadmap tailored to your business
3. **Start Implementation**: Begin with our 30-day satisfaction guarantee

## Contact Information

Ready to transform your digital marketing? Contact us:
- Website: https://joevesmartsolutions.com
- Email: hello@joevesmartsolutions.com
- Phone: +60 123-456-789

---
*This report is generated based on industry benchmarks and our experience with 150+ Malaysian SMEs. Actual results may vary based on implementation and market conditions.*
`;
}

function generateDevelopmentGuide(metadata: any, createdAt: string): string {
  const { projectScope, budgetRange, timelineUrgency, technicalRequirements, teamSize, recommendations } = metadata;
  
  return `
# Web Application Development Guide

**Generated on:** ${new Date(createdAt).toLocaleDateString()}

## Project Assessment Summary

**Project Scope:** ${projectScope === 'simple' ? 'Simple Website' : projectScope === 'moderate' ? 'Business Application' : projectScope === 'complex' ? 'Enterprise Solution' : 'Innovative Platform'}

**Budget Range:** ${budgetRange}

**Timeline:** ${timelineUrgency === 'urgent' ? 'Urgent (1-2 months)' : timelineUrgency === 'standard' ? 'Standard (3-6 months)' : 'Flexible (6-12 months)'}

**Team Size:** ${teamSize === 'solo' ? 'Solo Developer' : teamSize === 'small' ? 'Small Team (2-3 developers)' : teamSize === 'medium' ? 'Medium Team (4-6 developers)' : 'Large Team (7+ developers)'}

## Technology Stack Recommendations

### Core Technologies
${recommendations?.technologyStack?.map((tech: string) => `- ${tech}`).join('\n') || 'Not specified'}

### Additional Requirements
${technicalRequirements?.map((req: string) => {
  const requirementMap: Record<string, string> = {
    'responsive': 'Responsive Design - Mobile-first approach',
    'authentication': 'User Authentication - Secure login system',
    'database': 'Database Integration - Data persistence layer',
    'api': 'API Development - RESTful services',
    'payment': 'Payment Processing - Secure payment gateway',
    'realtime': 'Real-time Features - WebSocket implementation',
    'mobile': 'Mobile App Integration - Native/hybrid mobile app',
    'ai': 'AI/ML Features - Machine learning capabilities',
    'analytics': 'Analytics Dashboard - Data visualization',
    'cms': 'Content Management System - Easy content updates'
  };
  return `- ${requirementMap[req] || req}`;
}).join('\n') || 'No additional requirements specified'}

## Development Timeline

**Estimated Timeline:** ${recommendations?.estimatedTimeline || 'Not specified'}

**Recommended Approach:** ${recommendations?.recommendedApproach || 'Agile Development'}

### Phase 1: Planning & Design (Week 1-2)
- Requirements gathering and analysis
- UI/UX design and wireframing
- Technical architecture planning
- Database schema design

### Phase 2: Core Development (Week 3-8)
- Backend API development
- Frontend implementation
- Database integration
- Authentication system setup

### Phase 3: Advanced Features (Week 9-12)
- Payment processing integration
- Real-time features implementation
- Third-party API integrations
- Performance optimization

### Phase 4: Testing & Deployment (Week 13-16)
- Comprehensive testing (unit, integration, user acceptance)
- Security audits and penetration testing
- Performance optimization
- Production deployment and monitoring

## Budget Breakdown

**Estimated Budget:** ${recommendations?.budgetEstimate || 'Not specified'}

### Cost Distribution
- **Development (60%):** Core functionality implementation
- **Design (15%):** UI/UX design and user interface
- **Testing (10%):** Quality assurance and bug fixing
- **Infrastructure (10%):** Hosting, domains, and tools
- **Contingency (5%):** Unexpected costs and changes

## Risk Assessment

**Risk Level:** ${recommendations?.riskLevel || 'Low'}

### Potential Risks & Mitigation
1. **Timeline Delays**: Regular milestone reviews and agile methodology
2. **Technical Complexity**: Early prototyping and proof of concepts
3. **Budget Overruns**: Fixed-price contracts with clear scope
4. **Team Availability**: Backup resources and knowledge transfer

## Success Metrics

### Development Metrics
- Code quality score > 90%
- Test coverage > 80%
- Performance benchmarks met
- Security audit passed

### Business Metrics
- User engagement rate
- Conversion rate improvement
- System uptime > 99.9%
- Customer satisfaction score

## Next Steps

1. **Schedule Technical Consultation**: 30-minute call with our development team
2. **Detailed Requirements Gathering**: Comprehensive project scoping session
3. **Proposal & Contract**: Formal proposal with timeline and deliverables
4. **Project Kickoff**: Start development with our proven methodology

## Support & Maintenance

### Included Services
- 30-day post-launch support
- Bug fixes and minor adjustments
- Performance monitoring
- Security updates

### Optional Services
- Ongoing maintenance contracts
- Feature enhancements
- Performance optimization
- 24/7 monitoring and support

## Contact Information

Ready to start your web application project? Contact us:
- Website: https://joevesmartsolutions.com
- Email: hello@joevesmartsolutions.com
- Phone: +60 123-456-789

---
*This guide is based on industry best practices and our experience with 150+ web application projects. Recommendations may be adjusted based on specific requirements and market conditions.*
`;
}