import React from 'react';
import Profile from '../assets/profile.png';
import {
  EMAIL,
  PHONE_ID,
  PHONE_MY,
  CERTIFICATIONS_DRIVE_URL,
} from '../constants/links';

const PrintCV = () => {
  return (
    <div className="hidden print:block w-full text-slate-900 bg-white p-0 font-sans leading-tight">
      
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-3 mb-3 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 uppercase">
            Rohmat Dasuki
          </h1>
          <p className="text-xs font-bold text-slate-800 mt-0.5">
            Senior Software Engineer (React Native & Full-Stack)
          </p>
          <div className="text-[9pt] text-slate-700 font-mono mt-1 space-y-0.5">
            <p>Location: Kuala Lumpur, Malaysia & Garut, West Java, Indonesia</p>
            <p>
              Phones: {PHONE_MY} | {PHONE_ID} | Email: {EMAIL}
            </p>
            <p>
              Google Drive Certifications: {CERTIFICATIONS_DRIVE_URL}
            </p>
          </div>
        </div>
        <img
          src={Profile}
          alt="Rohmat Dasuki"
          className="w-20 h-20 rounded-lg object-cover border-2 border-slate-900 flex-shrink-0"
        />
      </div>

      {/* Executive Summary */}
      <div className="mb-3">
        <h2 className="text-[10pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1">
          Executive Summary
        </h2>
        <p className="text-[9pt] text-slate-800 leading-normal">
          Results-driven Senior Software Engineer with 5+ years of experience engineering high-scale mobile (React Native) and full-stack (React, Next.js, Nuxt 3, Spring Boot) architectures. Proven expertise in building secure, compliant financial systems (PayNet, PasarDana), driving 20%+ transaction efficiency optimizations, and deploying scalable cloud-native microservices across AWS, GCP, and Azure. Dedicated to type-safe development (TypeScript, Zod), OWASP security, and automated testing (Vitest, Jest, JUnit).
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-3">
        <h2 className="text-[10pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[8.5pt] text-slate-800">
          <p><strong>Mobile:</strong> React Native (Expo & Bare), iOS (Xcode), Android (Android Studio), APNS/FCM, EAS, OTA</p>
          <p><strong>Frontend:</strong> TypeScript, JavaScript ES6+, Next.js, Nuxt 3, React, Vue.js, Redux, Pinia, Zustand, Tailwind CSS</p>
          <p><strong>Backend:</strong> Java, Spring Boot, Node.js, Express.js, ASP.NET, Laravel, RESTful APIs, GraphQL, Microservices</p>
          <p><strong>Databases & Cloud:</strong> PostgreSQL, MySQL, MongoDB, Firebase, AWS (SQS, S3), GCP, Azure, Docker, Kubernetes</p>
          <p><strong>Testing & Security:</strong> Vitest, Jest, JUnit, Postman, Zod/Zodios, OWASP Security, JWT/OAuth2</p>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-3">
        <h2 className="text-[10pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5">
          Professional Experience
        </h2>
        <div className="space-y-2.5 text-[8.5pt]">
          <div>
            <div className="flex justify-between font-bold text-slate-900 text-[9pt]">
              <span>PayNet (Payments Network Malaysia) — Senior Software Engineer</span>
              <span>March 2024 – Present</span>
            </div>
            <p className="text-slate-700 italic text-[8pt]">Kuala Lumpur, Malaysia</p>
            <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-slate-800">
              <li>Architected high-availability payment system web portals using Nuxt 3, Pinia, and DaisyUI, reducing render latency.</li>
              <li>Engineered enterprise microservices with Java/Spring Boot, ensuring 100% compliance with national banking standards.</li>
              <li>Enforced end-to-end type safety with TypeScript and Zod across full-stack applications to minimize runtime errors.</li>
              <li>Modernized testing workflows by implementing Vitest and automated API integration suites.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-bold text-slate-900 text-[9pt]">
              <span>PasarDana — Software Engineer (Long-Term Freelance)</span>
              <span>June 2023 – September 2024</span>
            </div>
            <p className="text-slate-700 italic text-[8pt]">Jakarta, Indonesia</p>
            <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-slate-800">
              <li>Engineered core business logic and database interfaces for fintech trading apps, improving transaction efficiency by 20%.</li>
              <li>Refactored multi-tier applications leveraging Java, Spring Boot, and React Native to reduce system downtime.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-bold text-slate-900 text-[9pt]">
              <span>Vox Teneo Asia — Frontend Engineer (Project-Based)</span>
              <span>September 2023 – February 2024</span>
            </div>
            <p className="text-slate-700 italic text-[8pt]">Bandung, Indonesia</p>
            <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-slate-800">
              <li>Led frontend development for 'Leapsy' mobile app, boosting user retention by 15% through intuitive UI/UX.</li>
              <li>Established structured QA test plans and execution frameworks, reducing post-release bug reports by 25%.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-bold text-slate-900 text-[9pt]">
              <span>Sinarmas Quantum Engine (SQE) — Frontend Engineer</span>
              <span>March 2023 – October 2023</span>
            </div>
            <p className="text-slate-700 italic text-[8pt]">Jakarta, Indonesia</p>
            <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-slate-800">
              <li>Built SMMF mobile application for multi-finance management utilizing React Native and React Context.</li>
              <li>Integrated Zodios to enforce strict runtime type safety, ensuring 100% secure financial transactions.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-bold text-slate-900 text-[9pt]">
              <span>PT Telekomunikasi Indonesia Tbk — Software Developer</span>
              <span>June 2020 – November 2022</span>
            </div>
            <p className="text-slate-700 italic text-[8pt]">Bandung, Indonesia</p>
            <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-slate-800">
              <li>Developed UMeetMe video conferencing solution supporting enterprise-level concurrent video calls via WebRTC and Firebase.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div>
        <h2 className="text-[10pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1">
          Education & Certifications
        </h2>
        <div className="text-[8.5pt] space-y-0.5 text-slate-800">
          <p><strong>Politeknik Negeri Bandung (POLBAN):</strong> Associate Degree in Informatics Engineering (Jan 2016 – Nov 2019)</p>
          <p><strong>MongoDB University:</strong> CRUD Operations in MongoDB & SQL to MongoDB Document Model</p>
          <p><strong>Google Drive Certifications Folder:</strong> {CERTIFICATIONS_DRIVE_URL}</p>
        </div>
      </div>

    </div>
  );
};

export default PrintCV;
