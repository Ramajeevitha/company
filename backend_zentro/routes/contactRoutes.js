import express from "express";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

const router = express.Router();

/* ================= EMAIL CONFIG ================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASS,
  },
});

/* ================= POST: CONTACT FORM ================= */
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    /* ================= EMAIL TO ADMIN ================= */
    await transporter.sendMail({
      from: `"Zentro Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    /* ================= AUTO REPLY TO USER ================= */
    await transporter.sendMail({
      from: `"Zentro Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✨ Thanks for contacting Zentro!",
      html: `
        <p>Hi <b>${name}</b>,</p>
        <p>We received your message and will get back to you soon.</p>
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

/* ================= GET: ALL CONTACTS ================= */
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
