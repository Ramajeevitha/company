import express from "express";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js"; // mongoose model

const router = express.Router();

/* ================= EMAIL CONFIG ================= */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASS, // Gmail App Password
  },
});

/* ================= POST CONTACT ================= */
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to MongoDB
    const contact = await Contact.create({ name, email, message });

    // Email to admin
    await transporter.sendMail({
      from: `"Zentro Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Auto reply to user
    await transporter.sendMail({
      from: `"Zentro Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting Zentro",
      html: `
        <p>Hi ${name},</p>
        <p>We received your message and will contact you soon.</p>
        <br/>
        <p>— Zentro Team</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
