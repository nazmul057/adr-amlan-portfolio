import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import {
  EMAIL_ADDRESS_AA,
  PHONE_NUMBER_AA,
  GITHUB_URL_AA,
  LINKEDIN_URL_AA
} from "@/constants";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzgnjvp";

const Contact: React.FC = () => {
  // const navigate = useNavigate();

  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (res.ok) {
        form.reset();
        // navigate("/contact/sent"); // create this route/page
        window.open("#/contact/sent", "_blank");
        return;
      }

      const data = await res.json().catch(() => null);
      const err0 = data?.errors?.[0];
      const msg = err0?.field
          ? `${String(err0.field).toUpperCase()}: ${err0.message}`
          : (err0?.message || "Something went wrong. Please try again.");
      // const msg =
      //   data?.errors?.[0]?.message ||
      //   "Something went wrong. Please try again.";

      setStatus("error");
      setErrorMsg(msg);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl">
          Get In Touch
        </h1>
        <p className="max-w-2xl text-base text-white/60">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out for collaborations or job opportunities.
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Form */}
        <form
          className="flex flex-1 flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-white">Name</span>
              <input
                type="text"
                name="name"
                required
                className="h-14 w-full rounded-lg border border-white/20 bg-background-dark/50 px-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your name"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-white">Email Address</span>
              <input
                type="email"
                name="email"
                required
                className="h-14 w-full rounded-lg border border-white/20 bg-background-dark/50 px-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your email"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white">Subject</span>
            <input
              type="text"
              name="subject"
              className="h-14 w-full rounded-lg border border-white/20 bg-background-dark/50 px-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="What is this about?"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white">Message</span>
            <textarea
              name="message"
              required
              className="min-h-[160px] w-full resize-y rounded-lg border border-white/20 bg-background-dark/50 p-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Write your message here..."
            />
          </label>

          {/* Error flash */}
          {status === "error" && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 h-14 w-full rounded-lg bg-primary text-base font-bold text-white transition-colors hover:bg-primary-hover disabled:opacity-60 sm:w-auto sm:px-12 sm:self-start"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Direct Links (Sidebar for Desktop, Bottom for Mobile) */}
        <div className="flex flex-col gap-8 lg:w-80 lg:pt-8">
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Connect with me</h3>
            <div className="flex flex-col gap-4">
              <a
                href={LINKEDIN_URL_AA}
                className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-primary">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="font-bold text-white">LinkedIn</p>
                  <p className="text-sm text-white/50">/in/amlan-audri/</p>
                </div>
              </a>

              <a
                href={GITHUB_URL_AA}
                className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-primary">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="font-bold text-white">GitHub</p>
                  <p className="text-sm text-white/50">@nazmul057</p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL_ADDRESS_AA}`}
                className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-primary">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="font-bold text-white">Email</p>
                  <p className="text-sm text-white/50">{EMAIL_ADDRESS_AA}</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-primary">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="font-bold text-white">Phone</p>
                  <p className="text-sm text-white/50">{PHONE_NUMBER_AA}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
