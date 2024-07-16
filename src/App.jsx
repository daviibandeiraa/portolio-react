import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Technologies from "./components/Technologies/Technologies"
import Experience from "./components/Experience/Experience"
const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased  selection:bg-purple-700 selecion:text-purple-900">
        <div className="fixed top-0 -z-10 h-full w-full">

        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero/>
          <About/>
          <Technologies/>
          <Experience/>
        </div>
      </div>
    </div>
  )
}

export default App
