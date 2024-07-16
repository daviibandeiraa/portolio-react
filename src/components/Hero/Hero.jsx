import profilePicture from "../../assets/images/avatar.png"
import { HERO_CONTENT } from "../../constants"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Davi Bandeira
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            
            <p className="my-2 max-w-xl py-7 font-light tracking-tighter text-xl">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <img className="rounded-full border-2 border-x-violet-700 border-y-violet-700 bg-violet-900 shadow-lg shadow-indigo-800/50" src={profilePicture} alt="Davi Bandeira Picture" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
