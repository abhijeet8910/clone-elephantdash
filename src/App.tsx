
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"
import Video from "./components/Video"
import { VideoScrollSection } from "./components/VideoScrollSection"


function App() {
  

  return (
    <>
    {/* <h1 className="text-4xl">heelo</h1> */}
    <Navbar/>
   <Hero/>
   <Partners/>
   <Video/>
   <VideoScrollSection/>
   <Features/>
     </>
  )
}

export default App
