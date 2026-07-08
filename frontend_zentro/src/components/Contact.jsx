import { useState } from "react";
import "./Contact.css";

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        alert("Message submitted successfully ✅");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
        alert(data.message || "Failed to submit message ❌");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
      alert("Server error. Please try again ❌");
    }
  };

  return (
    <section className="contact" id="contact">
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

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;