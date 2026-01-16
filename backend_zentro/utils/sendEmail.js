import Brevo from "@getbrevo/brevo";

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

export const sendContactEmails = async ({ name, email, message }) => {
  try {
    /* ---------------- ADMIN EMAIL ---------------- */
    await apiInstance.sendTransacEmail({
      sender: {
        email: process.env.SENDER_EMAIL,
        name: process.env.SENDER_NAME,
      },
      to: [{ email: process.env.ADMIN_EMAIL }],
      subject: "📩 New Contact Form Submission",
      htmlContent: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    /* ---------------- USER AUTO‑REPLY (STYLED) ---------------- */
    await apiInstance.sendTransacEmail({
      sender: {
        email: process.env.SENDER_EMAIL,
        name: "Zentro Team",
      },
      to: [{ email }],
      subject: "Thanks for contacting Zentro 🚀",
      htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Zentro Contact</title>
</head>
<body style="margin:0; padding:0; background-color:#0b1d2a; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#0e2a3a; border-radius:12px; padding:30px; margin:40px 0;">
          <tr>
            <td style="color:#00e5ff; font-size:22px; font-weight:bold;">
              We’ve received your message 🚀
            </td>
          </tr>

          <tr><td style="height:20px;"></td></tr>

          <tr>
            <td style="color:#ffffff; font-size:15px;">
              Hi <strong>${name}</strong>,
            </td>
          </tr>

          <tr><td style="height:12px;"></td></tr>

          <tr>
            <td style="color:#cfd8dc; font-size:14px; line-height:1.6;">
              Thank you for reaching out to <strong>Zentro</strong>.
              We truly appreciate you taking the time to contact us.
            </td>
          </tr>

          <tr><td style="height:20px;"></td></tr>

          <tr>
            <td style="background:#123a52; padding:16px; border-radius:8px; color:#ffffff;">
              <strong>Your Message:</strong>
              <p style="margin:10px 0 0 0; color:#e0f7fa;">
                ${message}
              </p>
            </td>
          </tr>

          <tr><td style="height:20px;"></td></tr>

          <tr>
            <td style="color:#cfd8dc; font-size:14px;">
              Our team has received your message and will get back to you as soon as possible.
            </td>
          </tr>

          <tr><td style="height:30px;"></td></tr>

          <tr>
            <td style="color:#ffffff; font-size:14px;">
              Warm regards,<br/>
              <strong>Zentro Team</strong>
            </td>
          </tr>

          <tr><td style="height:30px;"></td></tr>

          <tr>
            <td style="text-align:center; font-size:12px; color:#90a4ae;">
              © 2026 Zentro. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    console.log("✅ Emails sent successfully");
  } catch (error) {
    console.error("❌ Brevo Email Error:", error);
    throw error;
  }
};
