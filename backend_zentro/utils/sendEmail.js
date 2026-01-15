import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email transporter ready");
  }
});

export const sendContactEmails = async ({ name, email, message }) => {
  // Admin email
  await transporter.sendMail({
    from: `"Zentro Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "📩 New Contact Form Submission",
    html: `
      <h3>New Message</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p>${message}</p>
    `,
  });

  // User auto-reply
  await transporter.sendMail({
    from: `"Zentro Team" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thanks for contacting Zentro",
    html: `
      <p>Hi ${name},</p>
      <p>We received your message and will reply soon.</p>
    `,
  });
};
