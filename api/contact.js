/**
 * Vercel Serverless Function: /api/contact
 * Handles contact form submissions with Resend and custom HTML email template
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateEmailTemplate({ name, email, subject, message, dateStr }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0f1d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0a0f1d; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #0f172a; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08); overflow: hidden; box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5);">
          
          <!-- Top Gradient Accent Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #6366f1, #06b6d4, #a855f7);"></td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 32px 36px 20px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="display: inline-block; padding: 5px 12px; background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 9999px; font-size: 11px; font-weight: 700; color: #a5b4fc; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">
                      Portfolio Notification
                    </div>
                    <h1 style="margin: 0 0 8px; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
                      New Contact Form Submission
                    </h1>
                    <p style="margin: 0; font-size: 14px; color: #94a3b8;">
                      You have received a new message through your personal portfolio website.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 36px;">
              <div style="border-top: 1px solid rgba(255, 255, 255, 0.07);"></div>
            </td>
          </tr>

          <!-- Sender Details Grid -->
          <tr>
            <td style="padding: 24px 36px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #1e293b; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); padding: 18px 22px;">
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; color: #64748b; font-weight: 600; width: 35%;">
                    Sender's Full Name:
                  </td>
                  <td style="padding: 8px 0; font-size: 14px; color: #ffffff; font-weight: 700;">
                    ${escapeHtml(name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; color: #64748b; font-weight: 600;">
                    Sender's Email Address:
                  </td>
                  <td style="padding: 8px 0; font-size: 14px;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #38bdf8; text-decoration: none; font-weight: 600;">
                      ${escapeHtml(email)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; color: #64748b; font-weight: 600;">
                    Subject:
                  </td>
                  <td style="padding: 8px 0; font-size: 14px; color: #e2e8f0; font-weight: 600;">
                    ${escapeHtml(subject)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; color: #64748b; font-weight: 600;">
                    Date &amp; Time Submitted:
                  </td>
                  <td style="padding: 8px 0; font-size: 13px; color: #94a3b8;">
                    ${escapeHtml(dateStr)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body Container -->
          <tr>
            <td style="padding: 0 36px 28px;">
              <div style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
                Submitted Message
              </div>
              <div style="background-color: #0a0f1d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 20px; font-size: 15px; color: #f1f5f9; line-height: 1.7; white-space: pre-wrap; word-break: break-word;">
${escapeHtml(message)}
              </div>
            </td>
          </tr>

          <!-- Quick Reply Button -->
          <tr>
            <td align="center" style="padding: 0 36px 36px;">
              <table role="presentation" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-radius: 10px; background: linear-gradient(135deg, #6366f1, #06b6d4);">
                    <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent('Re: ' + subject)}" target="_blank" style="display: inline-block; padding: 13px 28px; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 10px;">
                      Reply Directly to ${escapeHtml(name)} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 36px; background-color: #080d19; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #64748b;">
                This notification was generated from your personal portfolio contact form.
              </p>
              <p style="margin: 0; font-size: 11px; color: #475569;">
                &copy; ${new Date().getFullYear()} Raiza A. Roces. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    // 1. Validation
    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your full name (at least 2 characters).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    if (!subject || subject.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a subject line (at least 3 characters).'
      });
    }

    if (!message || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Your message is too brief (at least 10 characters).'
      });
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'raizaroces2800@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    // Format current date and time
    const now = new Date();
    const dateStr = now.toLocaleString('en-US', {
      timeZone: 'Asia/Manila',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    const htmlContent = generateEmailTemplate({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      dateStr
    });

    // 2. If RESEND_API_KEY is configured in Vercel environment variables:
    if (resendApiKey) {
      const senderEmail = process.env.SENDER_EMAIL || 'Raiza Roces Portfolio <onboarding@resend.dev>';

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [recipientEmail],
          reply_to: email.trim(),
          subject: `[Portfolio Contact] ${subject.trim()} - From ${name.trim()}`,
          html: htmlContent
        })
      });

      const data = await response.json();

      if (response.ok && data.id) {
        return res.status(200).json({
          success: true,
          message: 'Thank you! Your message has been sent directly to my email. I will respond to you promptly.',
          id: data.id
        });
      } else {
        console.error('Resend API error:', data);
        return res.status(500).json({
          success: false,
          message: data.message || 'Error dispatching email through Resend.'
        });
      }
    }

    // 3. If RESEND_API_KEY is not set yet in Vercel, report fallback status
    return res.status(200).json({
      success: false,
      fallback: true,
      message: 'RESEND_API_KEY not configured. Falling back to FormSubmit.'
    });
  } catch (error) {
    console.error('Serverless function error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing your message.'
    });
  }
}
