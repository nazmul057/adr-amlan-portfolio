import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const ContactSent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[58vh] flex-col items-center justify-center gap-6 px-4 text-center animate-fade-up">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/25">
        <CheckCircle2 size={38} />
      </span>

      <h1 className="text-gradient text-3xl font-black sm:text-4xl">Message Sent Successfully</h1>

      <p className="max-w-xl leading-relaxed text-white/65">
        Thank you for reaching out. Your message has been received, and I will get back to you as
        soon as possible.
      </p>

      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <button onClick={() => navigate('/')} className="btn btn--primary h-12 px-7 text-sm">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <button onClick={() => navigate('/contact')} className="btn btn--ghost h-12 px-7 text-sm">
          Send Another
        </button>
      </div>
    </div>
  );
};

export default ContactSent;
