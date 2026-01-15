import SibApiV3Sdk from "sib-api-v3-sdk";

const client = SibApiV3Sdk.ApiClient.instance;

// Configure API key
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const transactionalEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

export const sendContactEmails = async ({ name, email, message }) => {
  try {
    /* ================= ADMIN EMAIL ================= */
    await transactionalEmailApi.sendTransacEmail({
      sender: {
        email: process.env.SENDER_EMAIL,
        name: process.env.SENDER_NAME,
      },
      to: [
        {
          email: process.env.ADMIN_EMAIL,
          name: "Admin",
        },
      ],
      subject: "📩 New Contact Form Message",
      htmlContent: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    /* ================= USER AUTO‑REPLY ================= */
    await transactionalEmailApi.sendTransacEmail({
      sender: {
        email: process.env.SENDER_EMAIL,
        name: process.env.SENDER_NAME,
      },
      to: [
        {
          email: email,
          name: name,
        },
      ],
      subject: "✅ We received your message",
      htmlContent: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting <b>Zentro</b>.</p>
        <p>We have received your message and will get back to you shortly.</p>
        <br/>
        <p>— Zentro Team</p>
      `,
    });

    return true;
  } catch (error) {
    console.error("❌ Brevo email error:", error);
    throw error;
  }
};
