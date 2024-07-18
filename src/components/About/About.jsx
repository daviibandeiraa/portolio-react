import React from "react"
import AboutImg from "../../assets/images/aboutImg.png"
import { ABOUT_CONTENT } from "../../constants"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="bg-gradient-to-r from-pink-400 via-slate-500 to-violet-700 bg-clip-text text-4xl text-transparent pl-2">
          me
        </span>
      </h1>
      <div className="flex flex-wrap align-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-full mb-10 bg-violet-900 shadow-lg shadow-indigo-800/50 w-3.5/5" src={AboutImg} alt="About" />
          </div>
        </div>
        <div className="flex justify-center lg:justify-start pt-10">
          <p className="my-2 max-w-xl py-7 font-light tracking-tighter text-xl">{ABOUT_CONTENT}</p>
        </div>
      </div>
    </div>
  )
}

export default About
