import React from 'react'
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';

const Work = () => {
  const projects = [
    {
      title: 'React JS Dashboard',
      image: WorkImg,
      tech: ['React', 'Tailwind'],
      demo: '#',
      code: '#',
    },
    {
      title: 'Real Estate Landing',
      image: realEstate,
      tech: ['React', 'CSS'],
      demo: '#',
      code: '#',
    },
  ];

  return (
    <div name="projects" className='bg-[#0a192f] w-full text-gray-300 py-24 scroll-mt-24'>
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600">Projects</h2>
          <p className="pt-4 text-[#8892b0]">A few things I’ve built recently</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((p) => (
            <article key={p.title} className='group relative rounded-xl overflow-hidden bg-[#0f244a] border border-white/10 shadow-lg shadow-black/30'>
              <img src={p.image} alt={`${p.title} preview`} className='h-40 sm:h-48 w-full object-cover' loading='lazy' decoding='async' />
              <div className='p-4 flex flex-col gap-3'>
                <h3 className='text-lg font-semibold text-white'>{p.title}</h3>
                <div className='flex flex-wrap gap-2'>
                  {p.tech.map((t) => (
                    <span key={t} className='text-xs bg-white/10 text-[#ccd6f6] px-2 py-1 rounded-full'>{t}</span>
                  ))}
                </div>
                <div className='mt-2 flex flex-col sm:flex-row gap-3'>
                  <a href={p.demo} target='_blank' rel='noopener noreferrer'>
                    <button className='w-full sm:w-auto justify-center text-white border-2 border-white/30 hover:bg-white hover:text-[#0a192f] px-4 py-2 rounded-lg transition-colors'>Demo</button>
                  </a>
                  <a href={p.code} target='_blank' rel='noopener noreferrer'>
                    <button className='w-full sm:w-auto justify-center text-white border-2 border-pink-600/60 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 rounded-lg transition-colors'>Code</button>
                  </a>
                </div>
              </div>
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'/>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work