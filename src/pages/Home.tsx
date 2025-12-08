import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HERO_IMAGE_URL, PROFILE_IMAGE_URL } from '../constants';
import { Github, Linkedin, FileText } from 'lucide-react';

// export const PROFILE_IMAGE_URL_AA = "/supp_dcs/images/Profile_Picture_AA.jpg";

import ProfileImgAA from "@/supp_dcs/images/Profile_Picture_AA.jpg";
export const PROFILE_IMAGE_URL_AA = ProfileImgAA;


const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="mt-8 sm:mt-16">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Amlan Audri
              </h1>
              <h2 className="text-lg font-medium text-primary sm:text-xl">
                Systems Design | Biomedical Engineer | Software Specialist
              </h2>
              <p className="mt-2 max-w-lg text-base leading-relaxed text-white/70">
                Fascinated by the visions, ingenuity, and engineering behind modern computing and information infrastructure.
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => navigate('/projects')}
                className="flex h-12 min-w-[120px] items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
              >
                View Work
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="flex h-12 min-w-[120px] items-center justify-center rounded-lg bg-white/10 px-6 text-sm font-bold text-white transition-colors hover:bg-white/20"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex flex-1 justify-center md:justify-end">
            <div 
              className="aspect-square w-full max-w-[400px] rounded-2xl bg-cover bg-center shadow-2xl ring-1 ring-white/10"
              style={{ backgroundImage: `url("${HERO_IMAGE_URL}")` }}
              aria-label="Abstract purple network structure"
            />
          </div>
        </div>
      </section>

      {/* Profile & About Section */}
      <section className="grid gap-8 lg:grid-cols-3 lg:gap-12">
         {/* Personal Info Card */}
         <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl h-fit">
            <div 
               className="aspect-square w-full rounded-xl bg-cover shadow-inner" 
               style={{backgroundImage: `url(${PROFILE_IMAGE_URL_AA})`}}
            />
            <div className="flex flex-col gap-5">
               <div className="grid grid-cols-1 gap-4">
                   <div>
                      <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Full Name</h3>
                      <p className="text-base text-white font-medium">Amlan Audri</p>
                   </div>
                   <div>
                      <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Location</h3>
                      <p className="text-base text-white font-medium">Toronto, Ontario, Canada</p>
                   </div>
                   <div>
                      <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Phone</h3>
                      <p className="text-base text-white font-medium">+1 548 577 4072</p>
                   </div>
                   <div>
                      <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Email</h3>
                      <p className="text-base text-white font-medium text-sm break-all">adr.nazmul@gmail.com</p>
                   </div>
               </div>
               
                <div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 rounded-md bg-white/10 text-xs font-medium text-white/80">Systems Design</span>
                      <span className="px-2 py-1 rounded-md bg-white/10 text-xs font-medium text-white/80">Mechatronics</span>
                      <span className="px-2 py-1 rounded-md bg-white/10 text-xs font-medium text-white/80">Data Analytics</span>
                      <span className="px-2 py-1 rounded-md bg-white/10 text-xs font-medium text-white/80">Biomedical</span>
                  </div>
               </div>
               
               <div className="flex gap-3 pt-2">
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-primary hover:text-white" aria-label="GitHub">
                      <Github size={20} />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-primary hover:text-white" aria-label="LinkedIn">
                      <Linkedin size={20} />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-primary hover:text-white" aria-label="Portfolio">
                      <FileText size={20} />
                  </a>
               </div>
            </div>
         </div>

         {/* About Text Placeholder */}
         <div className="lg:col-span-2 flex flex-col justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                    I have built core expertise in software systems and technologies. A Master’s in Systems Design Engineering complements this foundation with emphasis on development processes and design effectiveness.
                </p>
                <p>
                    Beyond the core expertise, my background spans across mechatronics, data analytics, and biomedical domains, enabling a holistic, interdisciplinary approach to designing innovative, efficient, and sustainable solutions.
                </p>
                <p>
                    Adept at continuous learning and rapid adaptation, I thrive in mastering emerging technologies and contributing effectively in dynamic environments.
                </p>
            </div>
            <div className="mt-4">
                 <button 
                    onClick={() => navigate('/experience')}
                    className="text-primary font-bold hover:underline"
                 >
                    Read more about my journey &rarr;
                 </button>
            </div>
         </div>
      </section>

       {/* CTA */}
       <section className="mb-10 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/20 to-background-dark p-8 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Let's Build Something Great Together</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/70">
                I'm always excited to connect with like-minded professionals and explore new opportunities.
            </p>
            <button 
                onClick={() => navigate('/contact')}
                className="mx-auto flex h-12 items-center justify-center rounded-lg bg-primary px-8 font-bold text-white transition-colors hover:bg-primary-hover"
            >
                Start a Conversation
            </button>
       </section>
    </div>
  );
};

export default Home;