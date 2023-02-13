import React from "react";

const Journey = () => {
  const experience = [
    {
      name: "PT Bina Investama Infonet (PASAR DANA)",
      role: "React-Native Developer (Android & IOS)",
      duration: "Januari 2022 – Present",
      status: "Freelancer",
    },
    {
      name: "Labtek Indie",
      role: "React-Native Developer/Front-End Developer",
      duration: "Oct 2019 – Present (if available)",
      status: "project-base",
    },
    {
      name: "PT Telekomunikasi Indonesia Tbk (Telkom Indonesia)",
      role: "Software Developer",
      duration: "June 2020– 30 November 2022",
      status: "Full-Time",
    },
    {
      name: "PT Vodjo Teknologi Indonesia (Vodjo)",
      role: "React-Native Developer (Android & IOS)",
      duration: "1 June 2021 – Januari 2022",
      status: "Part-Time",
    },
    {
      name: "PT Biru Merah Technology (AturToko)",
      role: "React-Native Develop (Android & IOS)",
      duration: "Apr 2020 – Dec 2021",
      status: "Full-Time",
    },
    {
      name: "PT. Hade Indo Sejahtera (IndoHub)",
      role: "React-Native Developer   (Android & IOS)",
      duration: "Dec 2019 – Apr 2020",
      status: "Full-Time",
    },
    {
      name: "PT. BARRANS GLOBAL MANDIRI",
      role: "React-Native Developer/ Mobile Developer",
      duration: "July 2019 – Oct 2019",
      status: "Full-Time",
    },
    {
      name: "PT. Grage Solusindo Pratama",
      role: "Mobile Developer",
      duration: "Apr 2019 – June 2019",
      status: "Part-Time",
    },
    {
      name: "PT. Indo Online Mitra Usaha (Voxteneo Asia)",
      role: "QA Engineer",
      duration: "Nov 2018 – Jan 2019 ",
      status: "Freelance/Part-time",
    },
    {
      name: "CV.BIMS",
      role: "Front-End Developer",
      duration: "June 2018 – Sep 2018",
      status: "Internship",
    },
    {
      name: "CV.BIMS",
      role: "Front-End Developer",
      duration: "March 2018 – June 2018",
      status: "Part-Time",
    },
  ];
  return (
    <div
      name="journey"
      className=" w-full h-full bg-[#0a192f] text-gray-300 py-32"
    >
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Journey
            </p>
            <p className="pt-4">// There are the companies I've worked</p>
          </div>
        </div>
        <ul className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8 list-decimal ">
          {experience.map((data) => (
            <>
              <li className="sm:text-right text-2xl font-bold ">
                <p>{data.name}</p>
                <p className="font-light">{data.role}</p>
              </li>
              <div className="text-2xl">
                <p>{data.duration}</p>
                <p className="text-xl font-light">{data.status}</p>
              </div>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Journey;
