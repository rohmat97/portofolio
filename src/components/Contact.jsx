import React from 'react'
import {
  MAILTO,
  TEL_ID,
  TEL_MY,
  LINKEDIN_URL,
  PORTFOLIO_URL,
  EMAIL,
} from "../constants/links";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] w-full py-20 sm:py-24 scroll-mt-24 flex justify-center items-center px-4"
      aria-label="Contact section"
    >
      <form
        method="POST"
        action="https://getform.io/f/8b32dafc-5b4d-4ec0-8625-93188b890d34"
        className="flex flex-col max-w-[640px] w-full"
      >
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </h2>
          <p className="text-[#8892b0] pt-4">
            Submit the form below or email me directly.
          </p>
        </div>
        <div className="bg-[#0f244a] border border-pink-600/20 rounded-xl p-4 mb-6 text-[#ccd6f6]">
          <p>
            <span className="text-[#8892b0]">Email:</span>
            <a className="ml-2 underline hover:text-pink-400" href={MAILTO}>
              {EMAIL}
            </a>
          </p>
          <p className="mt-1">
            <span className="text-[#8892b0]">Phone:</span>
            <a className="ml-2 underline hover:text-pink-400" href={TEL_ID}>
              +62 812-2148-3613
            </a>
            <span className="mx-2 text-[#8892b0]">·</span>
            <a className="underline hover:text-pink-400" href={TEL_MY}>
              +60 17-949-0797
            </a>
          </p>
          <p className="mt-1">
            <span className="text-[#8892b0]">Address:</span>
            <span className="ml-2">
              KP. Cinunuk Hilir RT 002 RW 004, Desa Cinunuk, Kec. Wanaraja, Kab.
              Garut, Jawa Barat, Indonesia
            </span>
          </p>
          <p className="mt-1">
            <span className="text-[#8892b0]">LinkedIn:</span>
            <a
              className="ml-2 underline hover:text-pink-400 break-all"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/rohmat-dasuki-7ab950128
            </a>
          </p>
          <p className="mt-1">
            <span className="text-[#8892b0]">Website:</span>
            <a
              className="ml-2 underline hover:text-pink-400 break-all"
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              rohmat97.github.io/portofolio
            </a>
          </p>
        </div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          className="p-3 bg-[#ccd6f6] text-[#0a192f] rounded-md placeholder:text-slate-600"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          className="my-4 p-3 bg-[#ccd6f6] text-[#0a192f] rounded-md placeholder:text-slate-600"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          className="p-3 bg-[#ccd6f6] text-[#0a192f] rounded-md placeholder:text-slate-600"
          name="message"
          placeholder="Message"
          rows="8"
          required
        ></textarea>
        <button className="w-full sm:w-auto justify-center text-white border-2 border-pink-600/60 hover:bg-pink-600 hover:border-pink-600 px-6 py-3 mt-8 mx-auto inline-flex items-center rounded-xl transition-colors">
          Let's collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact