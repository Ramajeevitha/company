import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmails = async ({ name, email, message }) => {
  // ✅ EMAIL TO ADMIN
  await resend.emails.send({
    from: "Zentro <zentrooffice@gmail.com>",
    to: ["zentrooffice@gmail.com"],
    subject: "📩 New Contact Form Submission",
    html: `
      <h2>New Message Received</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  });

  // ✅ AUTO REPLY TO USER
  await resend.emails.send({
    from: "Zentro Team <zentrooffice@gmail.com>",
    to: [email],
    subject: "✨ Thanks for contacting Zentro!",
    html: `
      <div style="
        max-width:600px;
        margin:auto;
        background:#0b1f33;
        padding:30px;
        border-radius:12px;
        font-family:Arial,sans-serif;
        color:#ffffff;
      ">
        <h2 style="color:#22d3ee;text-align:center;">
          We’ve received your message 🚀
        </h2>

        <p>Hi <b>${name}</b>,</p>

        <p>
          Thank you for reaching out to <b>Zentro</b>.
          We truly appreciate you taking the time to contact us.
        </p>

        <div style="
          background:#112e4a;
          padding:15px;
          border-left:4px solid #22d3ee;
          border-radius:8px;
          margin:20px 0;
        ">
          <b>Your Message:</b>
          <p>${message}</p>
        </div>

        <p>
          Our team will get back to you soon.
        </p>

        <p>Warm regards,<br/><b>Zentro Team</b></p>

        <hr />
        <p style="font-size:12px;color:#94a3b8;text-align:center;">
          © 2026 Zentro. All rights reserved.
        </p>
      </div>
    `,
  });
};
