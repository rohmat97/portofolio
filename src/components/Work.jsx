import React from "react";
import NfpLogo from "../assets/nfp-logo.svg";

const Work = () => {
  const projects = [
    {
      title: "Pruforce (Prudential)",
      description:
        "Enterprise mobile app for Prudential agents and operations.",
      image: "https://logo.clearbit.com/prudential.co.id",
      tech: ["Mobile", "Enterprise"],
      demo: "#",
      code: "#",
    },
    {
      title: "Broko",
      description: "Mobile app product.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=60",
      tech: ["Mobile"],
      demo: "#",
      code: "#",
    },
    {
      title: "UMeetMe",
      description:
        "Secure video conferencing for Telkom with Jitsi, multi-participant calls, chat, screen sharing, and SDK.",
      image: "https://logo.clearbit.com/telkom.co.id",
      tech: ["Web", "Mobile", "Jitsi", "Redux", "WebSocket"],
      demo: "#",
      code: "#",
    },
    {
      title: "PGN LNG Website",
      description: "Corporate website for PGN LNG.",
      image: "https://logo.clearbit.com/pgnlng.co.id",
      tech: ["Web"],
      demo: "#",
      code: "#",
    },
    {
      title: "KAI Recruitment Website",
      description: "Recruitment website for Kereta Api Indonesia.",
      image: "https://logo.clearbit.com/kai.id",
      tech: ["Web", "Recruitment"],
      demo: "#",
      code: "#",
    },
    {
      title: "SMMF (Sinarmas Multi-Finance)",
      description:
        "Multi-Finance management app with React Native, Context, TypeScript, Jest, Zodios, and atomic design.",
      image: "https://logo.clearbit.com/simasfinance.co.id",
      tech: [
        "React Native",
        "React Context",
        "TypeScript",
        "Jest",
        "Zodios",
        "Animations",
      ],
      demo: "#",
      code: "#",
    },
    {
      title: "Leapsy",
      description:
        "Language learning app with React Native, Redux, TypeScript, and smooth animations.",
      image:
        "https://cdn.prod.website-files.com/6617d53bc2cdae351819c8c9/66449a6eb524eaf1bd8f471f_logo-leapsy.svg",
      tech: ["React Native", "Redux", "TypeScript", "Animations", "Education"],
      demo: "#",
      code: "#",
    },
    {
      title: "Santooi",
      description: "Self-meditation, self-healing, and yoga mobile app.",
      image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2a5?auto=format&fit=crop&w=1200&q=60",
      tech: ["Mobile", "Wellness"],
      demo: "#",
      code: "#",
    },
    {
      title: "SRC App (AturToko)",
      description:
        "Retail operations app for Sampoerna: inventory, sales analytics, loyalty, promos, and push notifications.",
      image: "https://logo.clearbit.com/src.id",
      tech: ["React Native", "Redux", "Redux-Saga", "Retail", "Analytics"],
      demo: "#",
      code: "#",
    },
    {
      title: "IndoHUB",
      description:
        "CCTV monitoring for Bandung roads with real-time traffic, incidents, and closures.",
      image: "https://images.unsplash.com/photo-1585432959449-98c3b0a93f0a?auto=format&fit=crop&w=1200&q=60",
      tech: ["React Native", "Redux", "Redux-Saga", "CCTV"],
      demo: "#",
      code: "#",
    },
    {
      title: "Pasardana",
      description:
        "React Native stock monitoring app with real-time prices, charts, news, alerts, and watchlists.",
      image: "https://logo.clearbit.com/pasardana.id",
      tech: ["React Native", "TypeScript", "Redux", "Redux-Saga", "Axios"],
      demo: "#",
      code: "#",
    },
    {
      title: "Ipractice",
      description:
        "UI revamp and new chat feature to enhance learning experience.",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=60",
      tech: [
        "React Native",
        "Chat",
        "UI Revamp",
        "TypeScript",
        "Jest",
        "Pinia",
        "VeeValidate",
        "VeeValidate",
      ],
      demo: "#",
      code: "#",
    },
    {
      title: "NFP (National Fraud Portal) – PayNet",
      description:
        "Integrated portal launched with Bank Negara Malaysia and financial institutions to streamline scam reporting and rapidly trace/freeze stolen funds; supports NSRC operations and standardized mule account data sharing.",
      image: NfpLogo,
      tech: [
        "Nuxt 3",
        "Tailwind CSS",
        "daisyUI",
        "Zod",
        "TypeScript",
        "Jest",
        "Pinia",
        "VeeValidate",
        "VeeValidate",
      ],
      demo: "#",
      code: "#",
    },
  ];

  const fallbackImage =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60";

  return (
    <div
      name="projects"
      className="bg-[#0a192f] w-full text-gray-300 py-24 scroll-mt-24"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </h2>
          <p className="pt-4 text-[#8892b0]">
            A few things I’ve built recently
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-xl overflow-hidden bg-[#0f244a] border border-white/10 shadow-lg shadow-black/30"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="h-40 sm:h-48 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImage;
                  }}
                />
              ) : (
                <img
                  src={fallbackImage}
                  alt={`${p.title} placeholder`}
                  className="h-40 sm:h-48 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="p-4 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                {p.description && (
                  <p className="text-sm text-[#a8b2d1]">{p.description}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/10 text-[#ccd6f6] px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex flex-col sm:flex-row gap-3">
                  {p.demo && p.demo !== "#" ? (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <button className="w-full sm:w-auto justify-center text-white border-2 border-white/30 hover:bg-white hover:text-[#0a192f] px-4 py-2 rounded-lg transition-colors">
                        Demo
                      </button>
                    </a>
                  ) : (
                    <button className="w-full sm:w-auto justify-center text-white border-2 border-white/30 opacity-50 cursor-not-allowed px-4 py-2 rounded-lg">
                      Demo
                    </button>
                  )}
                  {p.code && p.code !== "#" ? (
                    <a href={p.code} target="_blank" rel="noopener noreferrer">
                      <button className="w-full sm:w-auto justify-center text-white border-2 border-pink-600/60 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 rounded-lg transition-colors">
                        Code
                      </button>
                    </a>
                  ) : (
                    <button className="w-full sm:w-auto justify-center text-white border-2 border-pink-600/60 opacity-50 cursor-not-allowed px-4 py-2 rounded-lg">
                      Code
                    </button>
                  )}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
