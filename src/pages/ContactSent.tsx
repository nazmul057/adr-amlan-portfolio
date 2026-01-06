import React from "react";
import { useNavigate } from "react-router-dom";

const ContactSent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-3xl font-black text-white">
        Message Sent Successfully
      </h1>

      <p className="max-w-xl text-white/70">
        Thank you for reaching out. Your message has been received, and I will
        get back to you as soon as possible.
      </p>

      <button
        onClick={() => navigate("/contact")}
        className="mt-4 rounded-lg bg-primary px-8 py-3 font-bold text-white transition-colors hover:bg-primary-hover"
      >
        Return to Portfolio
      </button>
    </div>
  );
};

export default ContactSent;
