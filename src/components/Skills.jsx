import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import ReactNative from '../assets/ReactNativeIcon.png';
import ExpressJS from '../assets/expressjs.png';
import Android from '../assets/Android.png';
import IOS from '../assets/ios.png';
import SDK from '../assets/sdk.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
        {/* container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
                <p className="py-4">// There are the techonologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
                    <p className="my-4">CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
                    <p className="my-4">JavaScript</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
                    <p className="my-4">REACT</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
                    <p className="my-4">GITHUB</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
                    <p className="my-4">NODE JS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
                    <p className="my-4">MONGODB</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
                    <p className="my-4">AWS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
                    <p className="my-4">FIREBASE</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
                    <p className="my-4">TAILWIND CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={ReactNative} alt="HTML icon" />
                    <p className="my-4">REACT NATIVE</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-44 mx-auto" src={Android} alt="HTML icon" />
                    <p className="my-4">ANDROID </p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-44 mx-auto" src={IOS} alt="HTML icon" />
                    <p className="my-4">IOS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-36 mx-auto" src={SDK} alt="HTML icon" />
                    <p className="my-4">SDK ENGINEER</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-50 mx-auto" src={ExpressJS} alt="HTML icon" />
                    <p className="my-4">EXPRESS JS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills