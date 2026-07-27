import React, { useState } from "react";
import { FaSearch, FaExternalLinkAlt, FaLayerGroup, FaTimes } from "react-icons/fa";
import NfpLogo from "../assets/nfp-logo.svg";

const Work = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      title: "NFP (National Fraud Portal) – PayNet",
      category: "FinTech & Banking",
      description:
        "Integrated portal launched with Bank Negara Malaysia (BNM) and financial institutions to streamline scam reporting and rapidly trace/freeze stolen funds; supports NSRC operations and standardized mule account data sharing.",
      image: NfpLogo,
      tech: [
        "Nuxt 3",
        "Tailwind CSS",
        "daisyUI",
        "Zod",
        "TypeScript",
        "Vitest",
        "Pinia",
        "Java",
        "Spring Boot",
      ],
      demo: "#",
      code: "#",
    },
    {
      title: "UMeetMe Video Conferencing",
      category: "Enterprise & Web",
      description:
        "Secure video conferencing for Telkom Indonesia featuring Jitsi SDK, multi-participant video calls, real-time chat, screen sharing, and Spring Boot backend integration.",
      image: "https://logo.clearbit.com/telkom.co.id",
      tech: ["React Native", "React JS", "Jitsi SDK", "Spring Boot", "WebSocket", "SQL"],
      demo: "#",
      code: "#",
    },
    {
      title: "SMMF Multi-Finance Management",
      category: "FinTech & Banking",
      description:
        "Multi-Finance management mobile app with React Native, Context API, TypeScript, Jest testing, Zodios, and atomic design pattern.",
      image: "https://logo.clearbit.com/simasfinance.co.id",
      tech: ["React Native", "TypeScript", "React Context", "Jest", "Zodios", "Atomic Design"],
      demo: "#",
      code: "#",
    },
    {
      title: "Pasardana Stock Trading & Monitor",
      category: "FinTech & Banking",
      description:
        "Real-time stock market monitoring and trading application featuring real-time stock prices, candlestick charts, market news, price alerts, and watchlists.",
      image: "https://logo.clearbit.com/pasardana.id",
      tech: ["React Native", "TypeScript", "Redux", "Redux-Saga", "Axios", "Financial Charts"],
      demo: "#",
      code: "#",
    },
    {
      title: "Leapsy Language Learning",
      category: "Mobile Apps",
      description:
        "Language learning mobile app built with React Native, Redux, and TypeScript featuring smooth micro-animations and interactive vocabulary quizzes.",
      image: "https://cdn.prod.website-files.com/6617d53bc2cdae351819c8c9/66449a6eb524eaf1bd8f471f_logo-leapsy.svg",
      tech: ["React Native", "Redux", "TypeScript", "Mobile Animations", "Education"],
      demo: "#",
      code: "#",
    },
    {
      title: "SRC Retail Operations (AturToko)",
      category: "Mobile Apps",
      description:
        "Retail operations app for Sampoerna store network: real-time inventory management, sales analytics dashboard, loyalty programs, and targeted push promos.",
      image: "https://logo.clearbit.com/src.id",
      tech: ["React Native", "Redux", "Redux-Saga", "Retail Analytics", "Push Notifications"],
      demo: "#",
      code: "#",
    },
    {
      title: "Pruforce (Prudential)",
      category: "FinTech & Banking",
      description:
        "Enterprise mobile app built for Prudential insurance agents and field operations.",
      image: "https://logo.clearbit.com/prudential.co.id",
      tech: ["React Native", "React", "Redux", "Enterprise Insurance"],
      demo: "#",
      code: "#",
    },
    {
      title: "IndoHUB Traffic & CCTV Monitor",
      category: "Mobile Apps",
      description:
        "Real-time CCTV road traffic monitoring for Bandung city with live camera streams, traffic congestion alerts, road closure notifications, and map view.",
      image: "https://images.unsplash.com/photo-1585432959449-98c3b0a93f0a?auto=format&fit=crop&w=1200&q=60",
      tech: ["React Native", "Redux-Saga", "Live CCTV Streaming", "Map Location"],
      demo: "#",
      code: "#",
    },
    {
      title: "Santooi Wellness & Yoga",
      category: "Mobile Apps",
      description:
        "Guided self-meditation, mindfulness, self-healing, and yoga mobile application with custom audio players and streak dashboards.",
      image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2a5?auto=format&fit=crop&w=1200&q=60",
      tech: ["React Native", "Redux-Saga", "Audio Streaming", "Wellness"],
      demo: "#",
      code: "#",
    },
    {
      title: "Broko Mobile Platform",
      category: "Mobile Apps",
      description: "Mobile product application platform.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=60",
      tech: ["React Native", "Mobile"],
      demo: "#",
      code: "#",
    },
    {
      title: "PGN LNG Corporate Website",
      category: "Enterprise & Web",
      description: "Official corporate web platform for PGN LNG.",
      image: "https://logo.clearbit.com/pgnlng.co.id",
      tech: ["Web", "React", "Tailwind CSS"],
      demo: "#",
      code: "#",
    },
    {
      title: "KAI Recruitment Portal",
      category: "Enterprise & Web",
      description: "Enterprise recruitment and job application portal for Kereta Api Indonesia (KAI).",
      image: "https://logo.clearbit.com/kai.id",
      tech: ["Web", "Recruitment", "SQL"],
      demo: "#",
      code: "#",
    },
  ];

  const fallbackImage =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60";

  const categories = ["All", "FinTech & Banking", "Mobile Apps", "Enterprise & Web"];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      name="projects"
      aria-label="Projects section"
      className="w-full bg-[#080c14] text-slate-300 py-20 sm:py-28 border-t border-slate-900 scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Projects <span className="gradient-text">Showcase</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            A portfolio of production apps, payment portals, and mobile solutions I've developed.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 no-print">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Live Search Bar */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-3.5 text-slate-500 text-sm" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((p) => (
            <article
              key={p.title}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800/90 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur text-cyan-300 border border-cyan-500/30">
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono bg-slate-900/90 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-3 border-t border-slate-800/80 pt-4 no-print">
                  <button
                    onClick={() => setActiveModalProject(p)}
                    className="flex-1 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  {p.demo && p.demo !== "#" && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-cyan-400 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 rounded-xl transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="glass-card p-12 rounded-3xl text-center border border-slate-800">
            <FaLayerGroup className="mx-auto text-4xl text-slate-600 mb-3" />
            <p className="text-lg text-slate-300 font-semibold">No projects found</p>
            <p className="text-sm text-slate-500 mt-1">Try clearing your search query or switching categories.</p>
          </div>
        )}

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md no-print">
            <div className="glass-card max-w-lg w-full rounded-3xl border border-slate-800 overflow-hidden p-6 sm:p-8 relative">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
                aria-label="Close modal"
              >
                <FaTimes size={18} />
              </button>
              
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30">
                {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-100 mt-3">{activeModalProject.title}</h3>
              
              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t) => (
                    <span key={t} className="text-xs font-mono bg-slate-900 text-cyan-300 px-3 py-1 rounded-lg border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-900 rounded-xl border border-slate-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Work;
