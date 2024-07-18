import profilePicture from "../../assets/images/avatar.png"
import { HERO_CONTENT } from "../../constants"
import {RiFileDownloadLine } from "react-icons/ri"
import {RiDownloadLine } from "react-icons/ri"
import CV_Davi_Bandeira from "../../assets/content/CV_Davi_Bandeira.pdf"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Davi Bandeira
            </h1>
            <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>

            <p className="my-2 max-w-xl py-7 font-light tracking-tighter text-xl">
              {HERO_CONTENT}
            </p>

            <a href={CV_Davi_Bandeira} download="CV_Davi_Bandeira.pdf" target="_blank" rel="noopener noreferrer">
              <button
                className="flex items-center justify-center gap-2 rounded-full bg-violet-900 px-5 py-2 text-base font-light bg-gradient-to-r from-pink-400 to-violet-700 text-transparent text-white"
              >
                <RiFileDownloadLine className="text-xl text-white-500" />
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <img
              className="rounded-full border-2 border-x-violet-700 border-y-violet-700 bg-violet-900 shadow-lg shadow-indigo-800/50 mb-10"
              src={profilePicture}
              alt="Davi Bandeira Picture"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
