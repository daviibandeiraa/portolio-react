import React from "react"
import AboutImg from "../../assets/images/aboutImg.png"
import { ABOUT_CONTENT } from "../../constants"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: delay },
  },
})
const container2 = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: delay },
  },
})

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="bg-gradient-to-r from-pink-400 to-violet-700 bg-clip-text text-4xl text-transparent pl-2">
          me
        </span>
      </h1>
      <div className="flex flex-wrap align-center">
        <motion.div
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-full bg-violet-900 shadow-lg shadow-indigo-800/50 w-3.5/5" src={AboutImg} alt="About" />
          </div>
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center lg:justify-start pt-10 mb-10">
          <p className="my-2 max-w-xl py-7 font-light tracking-tighter text-xl">{ABOUT_CONTENT}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
