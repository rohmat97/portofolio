import React from "react";
import { SiTailwindcss, SiAmazonaws } from 'react-icons/si';


const Skills = () => {
  const skillIcons = [
    { name: 'React Native', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', fallback2: 'https://cdn.simpleicons.org/tailwindcss/38BDF8' },
    { name: 'Android', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg' },
    { name: 'iOS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
    { name: 'AWS', Icon: SiAmazonaws, color: '#FF9900', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', fallback2: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
    { name: 'Amazon SQS', Icon: SiAmazonaws, color: '#FF9900', url: 'https://cdn.simpleicons.org/amazonsqs/FF9900', fallback: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonsqs.svg', fallback2: 'https://img.shields.io/badge/Amazon%20SQS-FF9900?logo=amazonsqs&logoColor=white&labelColor=0a192f' },
    { name: 'Google Cloud', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Azure', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Redis', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Kafka', url: 'https://cdn.simpleicons.org/apachekafka/ffffff' },
    { name: 'RabbitMQ', url: 'https://cdn.simpleicons.org/rabbitmq/FF6600' },
    { name: 'GraphQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Postman', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'VSCode', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Jira', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'Vue.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Nuxt.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
    { name: 'Angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg' },
    { name: '.NET', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnet/dotnet-original.svg', fallback2: 'https://cdn.simpleicons.org/dotnet/512BD4' },
    { name: 'Redux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Bootstrap 5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Laravel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', fallback2: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { name: 'Pinia', url: 'https://cdn.jsdelivr.net/gh/vuejs/pinia/packages/docs/public/logo.svg', fallback: 'https://pinia.vuejs.org/logo.svg', fallback2: 'https://raw.githubusercontent.com/vuejs/pinia/main/packages/docs/public/logo.svg' },
  ];

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-20 sm:py-24 scroll-mt-24"
      aria-label="Skills and tools section"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 flex flex-col justify-center w-full">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600">
            Skills & Tools
          </h2>
          <p className="py-4 text-[#8892b0]">
            A selection of technologies I enjoy working with
          </p>
        </div>
        {/* Technical Skills (from resume) */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[#ccd6f6]">
          <div>
            <h3 className="text-xl font-semibold">Programming Languages</h3>
            <ul className="list-disc list-inside text-[#8892b0] mt-2 space-y-1">
              <li>Java, JavaScript (ES6+), TypeScript, Python, PHP, SQL, C++, XML</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6">Frontend</h3>
            <ul className="list-disc list-inside text-[#8892b0] mt-2 space-y-1">
              <li>React, React Native (5+ years), Vue.js, Nuxt.js, Angular</li>
              <li>State & Data: React Context, Pinia, Redux, Redux Saga</li>
              <li>Styling: Tailwind CSS, Bootstrap</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Backend</h3>
            <ul className="list-disc list-inside text-[#8892b0] mt-2 space-y-1">
              <li>Spring Boot, Node.js, Express.js, ASP.NET, Laravel</li>
              <li>RESTful APIs, GraphQL APIs</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6">Databases</h3>
            <ul className="list-disc list-inside text-[#8892b0] mt-2 space-y-1">
              <li>MySQL, PostgreSQL, MongoDB, Firebase</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6">Testing</h3>
            <ul className="list-disc list-inside text-[#8892b0] mt-2 space-y-1">
              <li>Jest, JUnit, Vitest</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
            <ul className="list-disc list-inside text-[#8892b0] mt-2 space-y-1">
              <li>AWS, Google Cloud, Azure</li>
              <li>Docker, Kubernetes</li>
              <li>CI/CD: Jenkins, GitLab CI, GitHub Actions</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6">Messaging & Security</h3>
            <ul className="list-disc list-inside text-[#8892b0] mt-2 space-y-1">
              <li>Kafka, RabbitMQ, AWS SQS</li>
              <li>OWASP, JWT, OAuth2</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6">Tools & Practices</h3>
            <ul className="list-disc list-inside text-[#8892b0] mt-2 space-y-1">
              <li>Git, GitHub, Postman, VSCode, JIRA</li>
              <li>Mobile UI/UX, Troubleshooting, Performance, Agile/Scrum</li>
              <li>Domains: Finance, Insurance, Banking systems</li>
            </ul>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillIcons.map((i) => {
            const IconComp = i.Icon;
            return (
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500" key={i.name}>
                {IconComp ? (
                  <IconComp
                    size={80}
                    className="mx-auto"
                    style={{ color: i.color || undefined }}
                    aria-label={`${i.name} icon`}
                  />
                ) : (
                  <img
                    className={`w-20 mx-auto ${i.invert ? 'invert' : ''}`}
                    src={i.url}
                    alt={`${i.name} icon`}
                    loading="lazy"
                    decoding="async"
                    data-fallback={i.fallback || ''}
                    data-fallback2={i.fallback2 || ''}
                    onError={(e) => {
                      const img = e.currentTarget;
                      const fallback = img.getAttribute('data-fallback');
                      const fallback2 = img.getAttribute('data-fallback2');
                      if (fallback && img.src !== fallback) {
                        img.src = fallback;
                        return;
                      }
                      if (fallback2 && img.src !== fallback2) {
                        img.src = fallback2;
                        return;
                      }
                      img.onerror = null;
                      img.src = 'https://via.placeholder.com/80?text=Icon';
                    }}
                  />
                )}
                <p className="my-4">{i.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
