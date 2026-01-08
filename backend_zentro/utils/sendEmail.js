import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactEmail = async ({ name, email, message }) => {
  // Email to YOU
  await transporter.sendMail({
    from: `"Zentro Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Message",
    html: `
      <h3>New Message Received</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });

  // Auto reply to user
  await transporter.sendMail({
    from: `"Zentro Team" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "We received your message",
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for contacting <b>Zentro</b>.</p>
      <p>We have received your message and will get back to you shortly.</p>
      <br/>
      <p>— Zentro Team</p>
    `,
  });
};
