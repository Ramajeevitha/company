import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactEmails = async ({ name, email, message }) => {
  try {
    console.log("📨 Sending admin email...");
    const adminInfo = await transporter.sendMail({
      from: `"Zentro Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Message Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });
    console.log("✅ Admin email sent:", adminInfo.messageId);

    console.log("📨 Sending user email...");
    const userInfo = await transporter.sendMail({
      from: `"Zentro Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✨ Thanks for contacting Zentro!",
      html: `<p>Hi ${name}, we received your message.</p>`,
    });
    console.log("✅ User email sent:", userInfo.messageId);

  } catch (err) {
    console.error("❌ Email error:", err);
  }
};
