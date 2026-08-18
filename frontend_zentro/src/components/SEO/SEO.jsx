import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Uyaron Technology` : "Uyaron Technology - Software, Hardware & Training"}</title>
      <meta name="description" content={description || "Uyaron provides innovative software solutions, reliable hardware services, and industry-focused training."} />
      <meta name="keywords" content={keywords || "Software, Hardware, Training, Courses, Internships, Uyaron Technology, IT Services, Development"} />
      <meta property="og:title" content={title ? `${title} | Uyaron Technology` : "Uyaron Technology"} />
      <meta property="og:description" content={description || "Uyaron provides innovative software solutions, reliable hardware services, and industry-focused training."} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
