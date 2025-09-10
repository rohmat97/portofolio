import React from "react";

const Journey = () => {
  const experiences = [
    {
      company: "PayNet (Payments Network Malaysia), Kuala Lumpur",
      title: "Senior Software Engineer",
      period: "March 2024 — Present",
      bullets: [
        "Led development of scalable payment solutions using Nuxt3, DaisyUI/Nuxt UI, and Pinia",
        "Collaborated with cross‑functional teams to design domain‑driven solutions in banking",
        "Built secure and compliant backend services with Java and Spring Boot",
        "Adopted TypeScript + Zod for type‑safe APIs and robust validation",
        "Practiced unit/integration testing with Vitest for production‑ready features",
        "Used Postman and SQL for API testing and debugging to ensure seamless front‑/back‑end integration",
      ],
    },
    {
      company: "Pasardana, Jakarta Selatan, Jakarta, Indonesia",
      title: "Software Engineer",
      period: "June 2023 — September 2024",
      bullets: [
        "Spearheaded innovation across React, RN, SQL, Java, .NET, XML, Spring Boot",
        "Created impactful applications with a strong focus on UX and design",
        "Transformed ideas into reliable, scalable solutions with measurable impact",
      ],
    },
    {
      company: "VOX ASIA / PT Indo Online Mitra Usaha, Bandung",
      title: "Frontend Engineer",
      period: "September 2023 — February 2024",
      bullets: [
        "Built Leapsy, a language‑learning mobile app using React Native, Redux, and TypeScript",
        "Implemented delightful UI animations and ensured seamless cross‑platform support",
      ],
    },
    {
      company: "PT GITS Indonesia, Bandung",
      title: "React Native Developer",
      period: "April 2023 — July 2023",
      bullets: [
        "Enhanced UI/UX for a banking app revamp and introduced dynamic chat for real‑time collaboration",
      ],
    },
    {
      company: "SQE (S-Quantum Engine), Jakarta",
      title: "Frontend Engineer",
      period: "March 2023 — October 2023",
      bullets: [
        "Developed SME mobile app for multi‑finance management with React Native, Context, TypeScript",
        "Implemented animations and secure financial data handling",
      ],
    },
    {
      company: "Pasardana, Jakarta, Indonesia",
      title: "React Native Developer",
      period: "January 2022 — June 2023",
      bullets: [
        "Built real‑time stock monitoring app with TypeScript, Redux, Axios (charts, alerts, watchlists)",
        "Optimized performance for smooth real‑time updates",
      ],
    },
    {
      company: "Vodjo, Bandung",
      title: "React Native Developer",
      period: "June 2021 — January 2022",
      bullets: [
        "Developed Santooi meditation & yoga app using RN, Redux, Redux‑Saga",
        "Delivered guided meditations, personalized dashboards, community features",
      ],
    },
    {
      company: "PT Telekomunikasi Indonesia Tbk (Telkom Indonesia), Bandung",
      title: "Software Developer",
      period: "June 2020 — November 2022",
      bullets: [
        "Built UMeetMe video‑conferencing solution using RN, React JS, SQL, Firebase, Spring Boot",
        "Integrated multi‑participant calls, real‑time chat, and screen sharing",
      ],
    },
    {
      company: "Atur Toko, Jakarta",
      title: "React Native Developer",
      period: "April 2020 — December 2021",
      bullets: [
        "Developed SRC community app for retail management with RN, Redux, Redux‑Saga",
        "Delivered inventory tools, sales analytics, and engagement features",
      ],
    },
    {
      company: "PT. BARRANS GLOBAL MANDIRI (on site at Prudential), South Jakarta",
      title: "React Native Developer",
      period: "July 2019 — October 2019",
      bullets: [
        "Implemented SPA with React/Redux to improve performance and usability",
        "Built a mobile app to increase user engagement",
      ],
    },
    {
      company: "PT. Hade Indo Sejahtera, Bandung Area, West Java, Indonesia",
      title: "React Native Developer",
      period: "December 2019 — April 2020",
      bullets: [
        "Developed IndoHUB mobile app for real‑time CCTV road monitoring using RN, Redux, and Redux‑Saga",
        "Implemented live camera streams, traffic info, alerts, and location‑based map view",
      ],
    },
    {
      company: "Vox Teneo Asia, Bandung",
      title: "QA Engineer",
      period: "November 2018 — February 2019",
      bullets: [
        "Developed QA processes to enhance reliability and operational efficiency",
        "Streamlined financial processes and improved office procedures",
      ],
    },
    {
      company: "BIMS, Bandung",
      title: "Software Developer (Intern)",
      period: "March 2018 — September 2018",
      bullets: [
        "Utilized CRM software to track customer data and interactions",
        "Refactored legacy code to improve scalability and maintainability",
        "Developed a secure PHP web application for real‑time order processing",
      ],
    },
  ];
  return (
    <div
      name="experience"
      className="w-full bg-[#0a192f] text-gray-300 py-20 sm:py-24 scroll-mt-24"
      aria-label="Professional experience section"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full px-6 sm:px-8">
          <div className="sm:text-left pb-8">
            <h2 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600">
              Experience
            </h2>
            <p className="pt-4 text-[#8892b0]">Selected roles and achievements</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-6 sm:px-8 space-y-10">
          {experiences.map((item) => (
            <section key={`${item.company}-${item.title}`} className="border-l-2 border-pink-600/40 pl-4">
              <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#ccd6f6]">{item.title}</h3>
                  <p className="text-base sm:text-lg text-[#8892b0]">{item.company}</p>
                </div>
                <span className="text-[#8892b0]">{item.period}</span>
              </header>
              <ul className="list-disc ml-5 mt-3 space-y-2 text-[#ccd6f6]">
                {item.bullets.map((b, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-[#8892b0]">{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
;

export default Journey;
