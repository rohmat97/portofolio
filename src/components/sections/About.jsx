import React from 'react';
import { FaGraduationCap, FaCertificate, FaMapMarkerAlt, FaUserCheck, FaExternalLinkAlt } from 'react-icons/fa';
import { EMAIL, TEL_ID, TEL_MY, CERTIFICATIONS_DRIVE_URL } from '../../constants/links';

const About = () => {
  return (
    <section
      name="about"
      aria-label="About section"
      className="relative w-full bg-transparent text-slate-300 py-20 sm:py-28 border-t border-slate-900 scroll-mt-20 theme-emerald overflow-hidden"
    >
      {/* Ambient Emerald Glow */}
      <div className="ambient-glow animate-pulse-glow top-20 right-10 w-[400px] h-[400px] bg-emerald-500/15 no-print" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="pb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            About <span className="gradient-text-emerald">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            Passionate Senior Software Engineer creating performant cross-platform mobile apps and scalable backend microservices.
          </p>
        </div>

        {/* Executive Bio & Profile Summary Card Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left 2 Columns: Executive Summary & Technical Focus */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                Executive Summary
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am a results-driven <strong className="text-slate-100">Senior Software Engineer</strong> with 5+ years of experience engineering high-scale mobile (<strong className="text-emerald-300">React Native</strong>) and full-stack (<strong className="text-cyan-300">React, Next.js, Nuxt 3, Spring Boot</strong>) architectures.
                </p>
                <p>
                  Proven expertise in building secure, compliant financial systems (such as Bank Negara Malaysia's National Fraud Portal at PayNet and PasarDana Fintech trading applications), optimizing system uptime, and establishing automated testing workflows (Vitest, Jest, JUnit).
                </p>
                <p>
                  Dedicated to driving engineering excellence through type-safe development (TypeScript, Zod, Zodios), microservices architecture, OWASP security standards, and scalable cloud-native deployments across <strong className="text-purple-300">AWS, GCP, and Azure</strong>.
                </p>
              </div>
            </div>

            {/* Core Competencies Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
                <h4 className="text-base font-bold text-emerald-300 mb-2">Mobile & Frontend Architecture</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  React Native (Expo & Bare Workflow, Native Modules, APNS/FCM, EAS, OTA), TypeScript, Next.js, Nuxt 3, Vue.js, React Context, Pinia, Zustand, Redux Saga, Tailwind CSS, DaisyUI.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
                <h4 className="text-base font-bold text-teal-300 mb-2">Backend & Cloud Operations</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Java Spring Boot, Node.js, Express.js, ASP.NET, Laravel, Microservices, PostgreSQL, MySQL, MongoDB, Redis, Docker, Kubernetes, AWS (SQS, S3), GCP, Azure, CI/CD (Jenkins, GitLab CI, GitHub Actions).
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Personal & Contact Information Drawer */}
          <div className="space-y-6">
            
            {/* Quick Details Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-slate-100 pb-3 border-b border-slate-800 flex items-center gap-2">
                <FaUserCheck className="text-emerald-400" /> Key Details
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block font-mono">Current Location</span>
                  <span className="text-slate-200 font-medium flex items-center gap-1.5 mt-0.5">
                    <FaMapMarkerAlt className="text-emerald-400" /> Kuala Lumpur, Malaysia
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block font-mono">Hometown / Origin</span>
                  <span className="text-slate-200 font-medium">Garut, 44183, West Java, Indonesia</span>
                </div>

                <div>
                  <span className="text-slate-400 block font-mono">Email Address</span>
                  <a href={`mailto:${EMAIL}`} className="text-emerald-400 hover:underline break-all font-mono">
                    {EMAIL}
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 block font-mono">Phone Numbers</span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono mt-1">
                    <a href={TEL_MY} className="text-slate-200 hover:text-emerald-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      +60 17-949-0797
                    </a>
                    <a href={TEL_ID} className="text-slate-200 hover:text-emerald-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      +62 812-2148-3613
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
                <FaGraduationCap className="text-teal-400 text-xl" /> Education
              </h3>
              <div>
                <h4 className="text-base font-bold text-slate-200">Politeknik Negeri Bandung (POLBAN)</h4>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Associate Degree in Informatics Engineering</p>
                <p className="text-xs text-emerald-400 font-mono mt-1">Bandung, Indonesia • Jan 2016 – Nov 2019</p>
              </div>
            </div>

            {/* Certifications Card with Drive Link */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <FaCertificate className="text-emerald-400 text-lg" /> Certifications
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Explore my verified certification credentials and professional diplomas on Google Drive:
              </p>

              <a
                href={CERTIFICATIONS_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-all shadow-sm"
              >
                <span>View Certifications Drive</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
