import profilePicture from "../../assets/images/avatar.png"
import { HERO_CONTENT } from "../../constants"
import { RiFileDownloadLine } from "react-icons/ri"
import { RiDownloadLine } from "react-icons/ri"
import CV_Davi_Bandeira from "../../assets/content/CV_Davi_Bandeira.pdf"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: delay },
  },
})
const container2 = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Davi Bandeira
            </motion.h1>
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-7 font-light tracking-tighter text-xl"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={container(0)}
              initial="hidden"
              animate="visible"
              href={CV_Davi_Bandeira}
              download="CV_Davi_Bandeira.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-start gap-2 rounded-full bg-violet-900 px-5 py-2 text-base font-light bg-gradient-to-r from-pink-400 to-violet-700 text-transparent text-white mb-10">
                <RiFileDownloadLine className="text-xl text-white-500" />
                Download CV
              </button>
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.img
              variants={container2(0)}
              initial="hidden"
              animate="visible"
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
