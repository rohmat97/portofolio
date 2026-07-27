import React, { useState } from "react";
import { SiTailwindcss, SiAmazonaws } from 'react-icons/si';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const skillCategories = [
    {
      category: "Mobile Development",
      skills: [
        { name: 'React Native (Expo & Bare)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Expert (5+ Yrs)' },
        { name: 'iOS (Xcode)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', level: 'Advanced' },
        { name: 'Android (Android Studio)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg', level: 'Advanced' },
        { name: 'Native Modules & Linking', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Advanced' },
        { name: 'Push Notifications (APNS/FCM)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', level: 'Advanced' },
        { name: 'EAS & OTA Updates', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Advanced' },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 'Advanced' },
        { name: 'JavaScript (ES6+)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Expert' },
        { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 'Advanced' },
        { name: 'Nuxt.js (Nuxt 3)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg', level: 'Advanced' },
        { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Expert' },
        { name: 'Vue.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 'Advanced' },
        { name: 'Redux / Redux Saga', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', level: 'Advanced' },
        { name: 'Pinia & Zustand', url: 'https://pinia.vuejs.org/logo.svg', level: 'Advanced' },
        { name: 'Tailwind CSS & DaisyUI', Icon: SiTailwindcss, color: '#38BDF8', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', level: 'Expert' },
      ],
    },
    {
      category: "Backend & Microservices",
      skills: [
        { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 'Advanced' },
        { name: 'Spring Boot', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 'Advanced' },
        { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Advanced' },
        { name: 'Express.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true, level: 'Proficient' },
        { name: 'ASP.NET', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', level: 'Proficient' },
        { name: 'Laravel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg', level: 'Proficient' },
        { name: 'RESTful APIs & GraphQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', level: 'Advanced' },
        { name: 'Microservices Architecture', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 'Advanced' },
      ],
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 'Advanced' },
        { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 'Advanced' },
        { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 'Certified' },
        { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', level: 'Advanced' },
        { name: 'AWS (SQS, S3)', Icon: SiAmazonaws, color: '#FF9900', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', level: 'Proficient' },
        { name: 'Google Cloud (GCP)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', level: 'Proficient' },
        { name: 'Azure', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', level: 'Proficient' },
        { name: 'Docker & Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 'Proficient' },
      ],
    },
    {
      category: "Testing, DevOps & Architecture",
      skills: [
        { name: 'Vitest & Jest', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', level: 'Advanced' },
        { name: 'JUnit', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 'Advanced' },
        { name: 'CI/CD (Jenkins, GitLab CI, GitHub Actions)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 'Advanced' },
        { name: 'Data Validation (Zod & Zodios)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 'Advanced' },
        { name: 'OWASP Security & JWT/OAuth2', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 'Advanced' },
      ],
    },
  ];

  const tabs = ["All", ...skillCategories.map(c => c.category)];

  return (
    <section
      name="skills"
      aria-label="Skills and tools section"
      className="w-full bg-transparent text-slate-300 py-20 sm:py-28 border-t border-slate-900 scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            Technical Skills Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            A comprehensive overview of languages, frameworks, cloud services, and testing frameworks I use in production.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-10 no-print">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categorized Layout vs Selected Skill Tab */}
        {activeTab === "All" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="glass-card p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                    <span>{cat.category}</span>
                    <span className="text-xs font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {cat.skills.length}
                    </span>
                  </h3>
                  <div className="space-y-3">
                    {cat.skills.map((s) => (
                      <div key={s.name} className="flex items-center justify-between group">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={s.url}
                            alt={`${s.name} logo`}
                            className={`w-5 h-5 object-contain ${s.invert ? 'invert' : ''}`}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <span className="text-sm text-slate-200 group-hover:text-cyan-400 transition-colors font-medium">
                            {s.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 bg-slate-900/80 px-2 py-0.5 rounded">
                          {s.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skillCategories
              .find(c => c.category === activeTab)
              ?.skills.map((s) => {
                const IconComp = s.Icon;
                return (
                  <div
                    key={s.name}
                    className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center gap-3 group"
                  >
                    {IconComp ? (
                      <IconComp size={42} style={{ color: s.color || '#38BDF8' }} />
                    ) : (
                      <img
                        src={s.url}
                        alt={`${s.name} icon`}
                        className={`w-12 h-12 object-contain group-hover:scale-110 transition-transform ${s.invert ? 'invert' : ''}`}
                      />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">{s.name}</p>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">{s.level}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
