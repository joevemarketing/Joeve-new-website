import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/mailer";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role key for admin access to leads
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      phone, 
      company, 
      service_interest, 
      budget_range, 
      message, 
      source_page 
    } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required" },
        { status: 400 }
      );
    }

    // Insert into existing 'leads' table in shared DB
    // Mapping fields to existing schema:
    // name -> name
    // email -> email
    // phone -> phone
    // company -> company_name
    // budget_range -> budget_range
    // message + service_interest -> interest_notes
    // source_page -> source
    
    const interestNotes = `Service Interest: ${service_interest || 'General'}\nMessage: ${message || ''}`;

    const { data, error } = await supabase
      .from("leads")
      .insert({
        name,
        email,
        phone,
        company_name: company,
        budget_range,
        interest_notes: interestNotes,
        source: source_page || "website-contact",
        // status: 'new' // 'status' column might not exist or be named differently ('internal_priority'?), skipping to rely on default
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase Error:", error);
      throw error;
    }

    // Optional email notification to Gmail
    const notifyTo = process.env.LEADS_NOTIFY_TO;
    if (notifyTo) {
      const subject = `New Lead • ${name} • ${service_interest || "General"}`;
      const html = `
        <h2>New Lead Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ""}
        ${company ? `<p><b>Company:</b> ${company}</p>` : ""}
        <p><b>Service Interest:</b> ${service_interest || "General"}</p>
        ${message ? `<p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}
        <p><b>Source Page:</b> ${source_page || "website-contact"}</p>
      `;
      try {
        await sendLeadEmail({ to: notifyTo, subject, html });
      } catch (e) {
        console.error("Lead email notify error:", e);
      }
    }

    return NextResponse.json({ success: true, lead: data });
  } catch (error) {
    console.error("Leads API Error:", error);
    return NextResponse.json(
      { error: "Failed to submit lead" },
      { status: 500 }
    );
  }
}
