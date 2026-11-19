import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GitHubIcon, LinkedInIcon } from '@/components/BrandIcons';
import { Send, AlertCircle, Mail, Phone } from 'lucide-react';

import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import {
  EMAIL_ADDRESS_AA,
  PHONE_NUMBER_AA,
  GITHUB_URL_AA,
  LINKEDIN_URL_AA
} from '@/constants';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzgnjvp';

const CHANNELS = [
  {
    label: 'LinkedIn',
    value: '/in/amlan-audri/',
    href: LINKEDIN_URL_AA,
    Icon: LinkedInIcon,
    external: true
  },
  {
    label: 'GitHub',
    value: '@nazmul057',
    href: GITHUB_URL_AA,
    Icon: GitHubIcon,
    external: true
  },
  {
    label: 'Email',
    value: EMAIL_ADDRESS_AA,
    href: `mailto:${EMAIL_ADDRESS_AA}`,
    Icon: Mail,
    external: false
  },
  {
    label: 'Phone',
    value: PHONE_NUMBER_AA,
    href: `tel:${PHONE_NUMBER_AA.replace(/\s+/g, '')}`,
    Icon: Phone,
    external: false
  }
];

const FIELD_CLASS =
  'w-full rounded-lg border border-white/15 bg-background-dark/60 px-4 text-white placeholder-white/35 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        form.reset();
        setStatus('idle');
        navigate('/contact/sent');
        return;
      }

      const data = await res.json().catch(() => null);
      const err0 = data?.errors?.[0];
      const msg = err0?.field
        ? `${String(err0.field).toUpperCase()}: ${err0.message}`
        : err0?.message || 'Something went wrong. Please try again.';

      setStatus('error');
      setErrorMsg(msg);
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        eyebrow="Contact"
        title="Get In Touch"
        lead="I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out for collaborations or job opportunities."
      />

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
        {/* Form */}
        <Reveal className="flex-1">
          <form
            className="surface flex h-full flex-col gap-5 p-6 md:p-8"
            onSubmit={handleSubmit}
            noValidate={false}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className={`py-4 ${FIELD_CLASS}`}
                  placeholder="Enter your name"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white">Email Address</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className={`py-4 ${FIELD_CLASS}`}
                  placeholder="Enter your email"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-white">Subject</span>
              <input
                type="text"
                name="subject"
                className={`py-4 ${FIELD_CLASS}`}
                placeholder="What is this about?"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-white">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                className={`resize-y py-4 ${FIELD_CLASS}`}
                placeholder="Write your message here..."
              />
            </label>

            {status === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200"
              >
                <AlertCircle size={17} className="mt-0.5 flex-none" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn btn--primary mt-1 h-14 w-full text-sm disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:self-start sm:px-10"
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
              {status !== 'submitting' && <Send size={15} />}
            </button>
          </form>
        </Reveal>

        {/* Direct channels */}
        <Reveal delay={100} className="lg:w-80">
          <div className="flex flex-col gap-4">
            <h3 className="eyebrow">Connect with me</h3>
            {CHANNELS.map(({ label, value, href, Icon, external }, i) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="surface surface--lift group flex items-center gap-4 p-4"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/[0.07] text-white transition-colors duration-300 group-hover:bg-primary">
                  <Icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-white">{label}</span>
                  <span className="block truncate text-sm text-white/50">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
