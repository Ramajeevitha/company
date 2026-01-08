import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success | error | loading

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        "https://company-2-pa4w.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {/* STATUS MESSAGE */}
        {status === "success" && (
          <p className="form-status success">
            ✅ Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="form-status error">
            ❌ Failed to send message. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
