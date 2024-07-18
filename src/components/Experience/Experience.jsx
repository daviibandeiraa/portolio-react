import React from "react"
import { EXPERIENCES } from "../../constants"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-2 font-semibold text-lg">
                {experience.role} -
                <span className="text-base text-purple-100 ml-1">
                  {experience.company}
                </span>
                <span>
                  <p className="mb-4 text-neutral-400 font-light mt-3 text-base">
                    {experience.description}
                  </p>
                </span>
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mb-5 mr-2 gap-y-3  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
