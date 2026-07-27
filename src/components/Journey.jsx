import React, { useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaFilter } from "react-icons/fa";

const Journey = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const experiences = [
    {
      company: "PayNet (Payments Network Malaysia)",
      location: "Kuala Lumpur, Malaysia",
      title: "Senior Software Engineer",
      period: "March 2024 — Present",
      category: "FinTech & Banking",
      bullets: [
        "Frontend Engineering: Architected high-availability payment system web portals using Nuxt.js, Pinia, and DaisyUI, reducing render latency and improving UX scores.",
        "Backend Scalability: Engineered enterprise microservices with Java/Spring Boot, ensuring 100% compliance with national banking standards and high transaction throughput.",
        "Data Integrity: Enforced end-to-end type safety with TypeScript and Zod across the full stack, resulting in a measurable decrease in runtime errors.",
        "Quality Assurance: Modernized testing workflows by implementing Vitest and automated API integration suites, streamlining cross-functional delivery cycles.",
      ],
      tech: ["Nuxt.js", "Java", "Spring Boot", "TypeScript", "Zod", "Pinia", "Vitest", "DaisyUI", "Postman", "SQL"],
    },
    {
      company: "PasarDana",
      location: "Jakarta, Indonesia",
      title: "Software Engineer (Long-Term Freelance)",
      period: "June 2023 — September 2024",
      category: "FinTech & Banking",
      bullets: [
        "System Architecture: Engineered core business logic and database interfaces for fintech applications, improving transaction processing efficiency by 20%.",
        "Full-Stack Optimization: Refactored multi-tier applications leveraging Java, Spring Boot, and React Native, significantly reducing system downtime during high-traffic periods.",
      ],
      tech: ["Java", "Spring Boot", "React Native", "SQL", "RESTful APIs"],
    },
    {
      company: "Vox Teneo Asia",
      location: "Bandung, Indonesia",
      title: "Frontend Engineer (Project-Based)",
      period: "September 2023 — February 2024",
      category: "Mobile Apps",
      bullets: [
        "Product Development: Led development for 'Leapsy,' a language-learning mobile app, resulting in a 15% increase in user retention through intuitive UI/UX design.",
        "Performance Optimization: Integrated fluid animations and interactive components using React Native, improving cross-platform UX consistency.",
      ],
      tech: ["React Native", "Redux", "TypeScript", "UI/UX Animations"],
    },
    {
      company: "SQE (Sinarmas Quantum Engine)",
      location: "Jakarta, Indonesia",
      title: "Frontend Engineer (Project-Based)",
      period: "March 2023 — October 2023",
      category: "FinTech & Banking",
      bullets: [
        "Banking Application: Built the SMMF mobile application for multi-finance management, utilizing React Native and React Context to support thousands of active users.",
        "Data Security: Integrated Zodios to enforce strict runtime type safety, ensuring 100% secure handling of sensitive financial transactions.",
      ],
      tech: ["React Native", "React Context", "TypeScript", "Zodios", "Jest"],
    },
    {
      company: "PT GITS Indonesia",
      location: "Bandung, Indonesia",
      title: "React Native Developer (Project-Based)",
      period: "April 2023 — July 2023",
      category: "FinTech & Banking",
      bullets: [
        "UI/UX Revamp: Spearheaded total UI overhaul of the Ipractice banking application, significantly enhancing user satisfaction scores.",
        "Feature Integration: Developed an interactive, real-time chat module that increased user collaboration and customer engagement.",
      ],
      tech: ["React Native", "TypeScript", "WebSocket", "Real-Time Chat"],
    },
    {
      company: "PasarDana",
      location: "Jakarta, Indonesia",
      title: "React Native Developer (Long-Term Freelance)",
      period: "January 2022 — June 2023",
      category: "FinTech & Banking",
      bullets: [
        "Fintech Engineering: Built a real-time stock monitoring application with interactive price charts and automated alerts, delivering sub-second updates to end-users.",
        "Performance Tuning: Optimized mobile application rendering and network polling, resulting in a smoother user experience during market volatility.",
      ],
      tech: ["React Native", "TypeScript", "Redux", "Axios", "Price Charts"],
    },
    {
      company: "Vodjo",
      location: "Bandung, Indonesia",
      title: "React Native Developer (Project-Based)",
      period: "June 2021 — January 2022",
      category: "Mobile Apps",
      bullets: [
        "Platform Engineering: Engineered 'Santooi,' a guided meditation mobile platform, successfully launching personalized dashboards and audio streaming modules.",
        "Feature Development: Integrated community engagement features that boosted daily active usage by 10%.",
      ],
      tech: ["React Native", "Redux-Saga", "Audio Streaming", "Mobile UX"],
    },
    {
      company: "PT Telekomunikasi Indonesia Tbk",
      location: "Bandung, Indonesia",
      title: "Software Developer",
      period: "June 2020 — November 2022",
      category: "Enterprise & Web",
      bullets: [
        "Enterprise Collaboration: Developed UMeetMe, a video conferencing solution, scaling infrastructure to support enterprise-level concurrent video calls.",
        "Real-Time Communication: Integrated WebRTC and Firebase for multi-participant audio-video calls and real-time screen sharing, ensuring high service stability.",
      ],
      tech: ["React Native", "React", "WebRTC", "Firebase", "Spring Boot"],
    },
    {
      company: "Atur Toko",
      location: "Jakarta, Indonesia",
      title: "React Native Developer",
      period: "April 2020 — December 2021",
      category: "Enterprise & Web",
      bullets: [
        "Retail Tech: Developed the SRC retail management app, automating complex inventory tracking and sales analytics for thousands of merchants.",
        "Data Visualization: Built automated sales reporting modules that streamlined decision-making for end-users.",
      ],
      tech: ["React Native", "Redux", "Redux-Saga", "Sales Analytics"],
    },
    {
      company: "Prudential",
      location: "Jakarta, Indonesia",
      title: "React Native Developer (Part-Time)",
      period: "July 2019 — October 2019",
      category: "FinTech & Banking",
      bullets: [
        "Application Development: Built single-page web applications (SPA) and supporting mobile interfaces to drive a 15% increase in user engagement metrics.",
      ],
      tech: ["React", "Redux", "Single-Page Apps"],
    },
    {
      company: "Vox Teneo Asia",
      location: "Bandung, Indonesia",
      title: "QA Engineer (Project-Based)",
      period: "November 2018 — February 2019",
      category: "Enterprise & Web",
      bullets: [
        "Quality Assurance: Established structured QA test plans and execution frameworks, reducing post-release bug reports by 25%.",
      ],
      tech: ["QA Testing", "Automated Testing", "Bug Reduction"],
    },
    {
      company: "BIMS",
      location: "Bandung, Indonesia",
      title: "Software Developer Intern",
      period: "March 2018 — September 2018",
      category: "Enterprise & Web",
      bullets: [
        "Web Development: Developed secure PHP web modules for real-time order processing.",
        "Legacy Refactoring: Optimized legacy codebases to improve maintainability and successfully integrated CRM tracking tools.",
      ],
      tech: ["PHP", "MySQL", "CRM"],
    },
  ];

  const categories = ["All", "FinTech & Banking", "Mobile Apps", "Enterprise & Web"];

  const filteredExperiences = activeCategory === "All"
    ? experiences
    : experiences.filter(e => e.category === activeCategory);

  return (
    <section
      name="experience"
      aria-label="Professional experience section"
      className="w-full bg-[#080c14] text-slate-300 py-20 sm:py-28 border-t border-slate-900 scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            A comprehensive record of my engineering roles, quantified achievements, and impact.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 no-print">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mr-2 py-2">
            <FaFilter className="text-indigo-400" /> Filter Domain:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experience Timeline Stream */}
        <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-10 space-y-12 ml-2 sm:ml-4">
          {filteredExperiences.map((exp, idx) => (
            <div key={`${exp.company}-${exp.title}-${idx}`} className="relative group">
              
              {/* Timeline Indicator Badge */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-cyan-400"></span>
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/90 text-left">
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 text-xs font-mono mb-2">
                      {exp.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400 text-sm mt-1">
                      <span className="font-semibold text-cyan-400 flex items-center gap-1.5">
                        <FaBuilding className="text-xs" /> {exp.company}
                      </span>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                        <FaMapMarkerAlt className="text-slate-500 text-xs" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                    <FaCalendarAlt className="text-xs text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Achievement Bullets */}
                <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-slate-300">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <FaCheckCircle className="text-cyan-400 text-xs mt-1.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Journey;
