import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does Uyaron Technology provide?",
      answer: "We offer comprehensive Software development (MERN, UI/UX, ERP, E-Commerce), Hardware solutions (IoT, PCB Design), and IT/Desktop Support services."
    },
    {
      question: "Do you provide internships and placement training?",
      answer: "Yes, we offer hands-on internships and dedicated placement training in various tech domains including Web Development and Embedded Systems."
    },
    {
      question: "How can I apply for an open position?",
      answer: "You can visit our Careers page and email your resume along with your domain, experience, and portfolio to uyaronoffice@gmail.com."
    },
    {
      question: "Do you build custom software for businesses?",
      answer: "Absolutely. We build scalable ERPs, POS systems, and custom software solutions tailored to your specific business needs."
    },
    {
      question: "Which courses and workshops do you recommend?",
      answer: "We highly recommend our Full Stack Web Development (MERN) and IoT Fundamentals courses. We also host hands-on workshops and internships that provide real-world project experience for students and professionals."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="faq-section" id="faq">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="faq-container">
        <h2 className="faq-title" data-aos="fade-up">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
