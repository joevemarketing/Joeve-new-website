import nodemailer from "nodemailer";

type SendOpts = {
  to: string;
  subject: string;
  html: string;
  text?: string;
};

export async function sendLeadEmail({ to, subject, html, text }: SendOpts) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user || "no-reply@localhost";
  const allowInsecure = String(process.env.SMTP_TLS_INSECURE || '').toLowerCase() === 'true';

  if (!user || !pass || !to) {
    return { skipped: true, reason: "SMTP not configured or missing recipient" };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    tls: allowInsecure ? { rejectUnauthorized: false } : undefined,
  });

  const result = await transporter.sendMail({
    from,
    to,
    subject,
    text: text || html.replace(/<[^>]+>/g, " "),
    html,
  });

  return { ok: true, messageId: result.messageId };
}
