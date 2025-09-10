import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-[#0a192f] text-gray-300 py-24 scroll-mt-24' aria-label='About section'>
        <div className='flex flex-col justify-center items-center w-full'>
            <div className="max-w-[1000px] w-full px-6 sm:px-8">
                <div className="sm:text-left pb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600">About</h2>
                </div>
            </div>
            {/* Profile Summary */}
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6 sm:px-8">
                <div className="sm:text-right text-3xl sm:text-4xl font-bold">
                    <p>Senior Software Engineer</p>
                    <p className='text-xl font-medium text-[#8892b0] mt-2'>Frontend · React Native · React · Angular · Vue.js · Nuxt.js · TypeScript · Spring Boot · Android & iOS · CI/CD · Cloud</p>
                </div>
                <div className='text-[#8892b0] leading-relaxed space-y-4'>
                    <p>
                      I am a results-driven Software Engineer with a comprehensive skill set spanning both
                      frontend and backend technologies. I specialize in creating exceptional user
                      experiences for mobile and web platforms using React for web and React Native for
                      cross-platform mobile development.
                    </p>
                    <p>
                      On the backend, I have hands-on experience with Laravel/PHP and microservices on
                      .NET platforms (ASP.NET Web API, Docker, RabbitMQ, MassTransit, gRPC, Ocelot API
                      Gateway). I’ve worked with MongoDB, Redis, PostgreSQL, SQL Server, Dapper, Entity
                      Framework Core, and embrace patterns like CQRS and Clean Architecture.
                    </p>
                    <p>
                      I’m committed to performance and user satisfaction, and I enjoy tackling complex
                      challenges to deliver robust, innovative solutions. Based in Kuala Lumpur,
                      Malaysia.
                    </p>
                </div>
            </div>
            {/* Details */}
            <div className="max-w-[1000px] w-full px-6 sm:px-8 pt-12">
                <div className="sm:text-left pb-6">
                    <h3 className="text-3xl font-bold inline border-b-4 border-pink-600">Details</h3>
                </div>
                <dl className='grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[#ccd6f6]'>
                  <div>
                    <dt className='text-[#8892b0]'>Address</dt>
                    <dd>KP. Cinunuk Hilir RT 002 RW 004, Desa Cinunuk, Kec. Wanaraja, Kab. Garut, Jawa Barat, Indonesia</dd>
                  </div>
                  <div>
                    <dt className='text-[#8892b0]'>Location</dt>
                    <dd>Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia</dd>
                  </div>
                  <div>
                    <dt className='text-[#8892b0]'>Date / Place of Birth</dt>
                    <dd>18 July 1997 — Garut, West Java, Indonesia</dd>
                  </div>
                  <div>
                    <dt className='text-[#8892b0]'>Nationality</dt>
                    <dd>Indonesian</dd>
                  </div>
                </dl>
            </div>
            {/* Education */}
            <div className="max-w-[1000px] w-full px-6 sm:px-8 pt-12">
                <div className="sm:text-left pb-6">
                    <h3 className="text-3xl font-bold inline border-b-4 border-pink-600">Education</h3>
                </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6 sm:px-8">
                <div className="sm:text-right text-2xl font-bold">
                    <p>Politeknik Negeri Bandung (POLBAN)</p>
                </div>
                <div className='text-2xl'>
                    <p>Associate's degree, Informatics Engineering</p>
                    <p className='text-xl text-[#8892b0]'>2016 – 2020</p>
                </div>
            </div>
            {/* Certifications */}
            <div className="max-w-[1000px] w-full px-6 sm:px-8 pt-12">
                <div className="sm:text-left pb-6">
                    <h3 className="text-3xl font-bold inline border-b-4 border-pink-600">Certifications</h3>
                </div>
                <ul className='list-disc ml-6 space-y-2 text-[#ccd6f6]'>
                  <li>CRUD Operations in MongoDB</li>
                  <li>From Relational Model (SQL) to MongoDB's Document Model</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About