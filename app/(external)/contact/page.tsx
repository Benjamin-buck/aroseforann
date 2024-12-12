import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold">Get in contact with us!</h1>
      <p>
        Send all inquiries to Benjamin Alan at{" "}
        <a
          href="mailto:thebenjaminalan@gmail.com"
          className="text-brand-red font-semibold"
        >
          thebenjaminalan@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
