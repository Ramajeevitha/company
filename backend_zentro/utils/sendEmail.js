import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmails = async ({ name, email, message }) => {
  // Email to ADMIN
  await resend.emails.send({
    from: "Zentro <onboarding@resend.dev>",
    to: process.env.EMAIL_USER,
    subject: "📩 New Contact Form Submission",
    html: `
      <h3>New Message</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  });

  // Auto reply to USER
  await resend.emails.send({
    from: "Zentro Team <onboarding@resend.dev>",
    to: email,
    subject: "Thanks for contacting Zentro",
    html: `
      <p>Hi ${name},</p>
      <p>We received your message and will contact you soon.</p>
      <br/>
      <p>— Zentro Team</p>
    `,
  });
};
