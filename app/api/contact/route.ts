import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      company,
      website,
      service,
      goal,
      budget,
      source,
    } = body;

    // Validate required fields
    if (!firstName || !email || !company || !goal) {
      return NextResponse.json(
        {
          error:
            "Missing required fields (First name, email, company, or goal)",
        },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "[EMAIL_ADDRESS]";
    const fromEmail =
      process.env.FROM_EMAIL || "Digixito Inquiries <[EMAIL_ADDRESS]";
    const bccEmail = process.env.BCC_EMAIL;

    // If Resend API key is not configured, simulate successful receipt in development
    if (!resendApiKey) {
      console.warn(
        "⚠️ [Resend] RESEND_API_KEY is not set. Submission recorded successfully (simulated mode). Add RESEND_API_KEY to your .env.local file to send live emails.",
      );
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Inquiry received (simulated - RESEND_API_KEY missing)",
      });
    }

    const resend = new Resend(resendApiKey);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #faf6eb; margin: 0; padding: 24px; color: #111111; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #dedad0; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04); }
            .header { background: #111111; padding: 28px 32px; color: #ffffff; border-bottom: 4px solid #FFEF46; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; }
            .header p { margin: 6px 0 0 0; color: #FFEF46; font-size: 13px; font-family: monospace; }
            .content { padding: 32px; }
            .badge { display: inline-block; background: #f8f6f0; border: 1px solid #dedad0; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; color: #111111; margin-bottom: 20px; }
            .field-row { margin-bottom: 18px; }
            .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #666666; font-family: monospace; margin-bottom: 4px; }
            .field-value { font-size: 15px; font-weight: 600; color: #111111; line-height: 1.5; }
            .goal-box { background: #f8f6f0; border-left: 3px solid #111111; padding: 14px 18px; border-radius: 8px; margin-top: 6px; font-size: 14px; line-height: 1.6; color: #222222; }
            .footer { padding: 20px 32px; background: #faf6eb; border-top: 1px solid #dedad0; font-size: 12px; color: #777777; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Project Inquiry</h1>
              <p>DIGIXITO INBOUND LEAD</p>
            </div>
            <div class="content">
              <div class="badge">Track: ${service || "General Inquiry"}</div>
              
              <div class="field-row">
                <div class="field-label">Prospect Name</div>
                <div class="field-value">${firstName} ${lastName || ""}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #111111; text-decoration: underline;">${email}</a></div>
              </div>

              <div class="field-row">
                <div class="field-label">Company / Organization</div>
                <div class="field-value">${company} ${website ? `(<a href="${website.startsWith("http") ? website : `https://${website}`}" target="_blank" style="color: #666666;">${website}</a>)` : ""}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Monthly Marketing / Tech Budget</div>
                <div class="field-value">${budget || "Not specified"}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Referral Source</div>
                <div class="field-value">${source || "Direct inquiry"}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Primary Growth Goal & Project Scope</div>
                <div class="goal-box">${goal}</div>
              </div>
            </div>
            <div class="footer">
              This inquiry was submitted via the Digixito website contact form on ${new Date().toUTCString()}.
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      ...(bccEmail ? { bcc: [bccEmail] } : {}),
      subject: `New Lead: ${firstName} ${lastName || ""} from ${company} (${service || "Inquiry"})`,
      html: emailHtml,
    });

    if (error) {
      console.error("❌ [Resend Error]:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
    });
  } catch (err: any) {
    console.error("❌ [API Contact Error]:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500 },
    );
  }
}
