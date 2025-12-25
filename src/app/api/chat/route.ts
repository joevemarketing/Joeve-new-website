import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message, conversation_id } = await req.json();
    const text: string = String(message || '').toLowerCase();
    const services = [
      'web app',
      'software development',
      'social media',
      'gen ai video',
      'video production',
      'smart chatbot',
      'landing pages',
      'sem',
      'jo bizcard',
      'services',
      'solutions'
    ];
    const priceKeywords = ['price', 'pricing', 'cost', 'how much', 'rate', 'quote', 'quotation'];
    const servicesKeywords = ['service', 'services', 'offer', 'offers', 'provide', 'do you do', 'solutions'];

    const AI_KEY = process.env.AI_API_KEY || process.env.OPENAI_API_KEY;
    if (!AI_KEY) {
      const isPricing = priceKeywords.some(k => text.includes(k)) && services.some(s => text.includes(s));
      const isServicesQuery = servicesKeywords.some(k => text.includes(k));

      if (isPricing) {
        return NextResponse.json({
          response:
            "Pricing varies based on scope and requirements. Please share your contact details and we will reach out with a tailored quotation.",
          conversation_id: conversation_id || crypto.randomUUID(),
          require_contact: true,
          cta_links: ["/contact", "/request-quotation"]
        });
      }

      if (isServicesQuery) {
        return NextResponse.json({
          response:
            "We offer: 1) Web App & Software Development — custom, scalable systems. 2) AI-Powered Social Media Generation — automated visuals and copy. 3) Gen AI Video Production — high-quality video at scale. Plus Smart Chatbots, Landing Pages, SEM, and JO Bizcard. Which area would you like to explore?",
          conversation_id: conversation_id || crypto.randomUUID(),
          suggested_service: "/services"
        });
      }

      return NextResponse.json({
        response:
          "I'm JOeve's AI assistant. I can help with Web Apps, Social Media Generation, and Gen AI Video Production. Tell me what you need and I’ll guide you.",
        conversation_id: conversation_id || crypto.randomUUID(),
        suggested_service: "/services"
      });
    }

    // This is a placeholder for the actual LLM call. 
    // In a real implementation, you would call OpenAI, Anthropic, or another provider here.
    // Example with generic fetch:
    /*
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are JOeve, a marketing & AI agency assistant...' },
          { role: 'user', content: message }
        ]
      })
    });
    const data = await response.json();
    */

    const isPricing = priceKeywords.some(k => text.includes(k)) && services.some(s => text.includes(s));
    const isServicesQuery = servicesKeywords.some(k => text.includes(k));

    if (isPricing) {
      return NextResponse.json({
        response:
          "Thanks for your interest. Pricing depends on your goals and timeline. Please leave your contact and we’ll get back to you with an exact quote.",
        conversation_id: conversation_id || crypto.randomUUID(),
        require_contact: true,
        cta_links: ["/contact", "/request-quotation"]
      });
    }

    if (isServicesQuery) {
      return NextResponse.json({
        response:
          "Here’s what we offer: Web App & Software Development, AI Social Media Generation, Gen AI Video Production, Smart Chatbots, Landing Pages, SEM, and JO Bizcard. Happy to explain any of these in detail.",
        conversation_id: conversation_id || crypto.randomUUID(),
        suggested_service: "/services"
      });
    }

    return NextResponse.json({
      response:
        `Thank you for asking about "${message}". Could you tell me more about your specific needs regarding Web Apps, Social Media, or Video Production?`,
      conversation_id: conversation_id || crypto.randomUUID(),
      suggested_service: "/services"
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
