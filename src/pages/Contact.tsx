import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Get In Touch
            </h1>
            <p className="max-w-2xl text-lg text-white/60">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out for collaborations or job opportunities.
            </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
            {/* Form */}
            <form className="flex flex-1 flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-white">Name</span>
                        <input 
                            type="text" 
                            className="h-14 w-full rounded-lg border border-white/20 bg-background-dark/50 px-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Enter your name"
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-white">Email Address</span>
                        <input 
                            type="email" 
                            className="h-14 w-full rounded-lg border border-white/20 bg-background-dark/50 px-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Enter your email address"
                        />
                    </label>
                </div>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-white">Subject</span>
                    <input 
                        type="text" 
                        className="h-14 w-full rounded-lg border border-white/20 bg-background-dark/50 px-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="What is this about?"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-white">Message</span>
                    <textarea 
                        className="min-h-[160px] w-full resize-y rounded-lg border border-white/20 bg-background-dark/50 p-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Write your message here..."
                    ></textarea>
                </label>
                <button 
                    type="submit"
                    className="mt-2 h-14 w-full rounded-lg bg-primary text-base font-bold text-white transition-colors hover:bg-primary-hover sm:w-auto sm:px-12 sm:self-start"
                >
                    Send Message
                </button>
            </form>
            
            {/* Direct Links (Sidebar for Desktop, Bottom for Mobile) */}
            <div className="flex flex-col gap-8 lg:w-80 lg:pt-8">
                <div>
                    <h3 className="mb-6 text-lg font-bold text-white">Connect with me</h3>
                    <div className="flex flex-col gap-4">
                        <a href="#" className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-primary">
                                <Linkedin size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-white">LinkedIn</p>
                                <p className="text-sm text-white/50">/in/johndoe</p>
                            </div>
                        </a>
                        <a href="#" className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-primary">
                                <Github size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-white">GitHub</p>
                                <p className="text-sm text-white/50">@johndoe</p>
                            </div>
                        </a>
                        <a href="mailto:hello@example.com" className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-primary">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-white">Email</p>
                                <p className="text-sm text-white/50">hello@example.com</p>
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
