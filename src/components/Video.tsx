

import { useEffect, useRef } from "react"

const Video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.setAttribute("playsinline", "true")

    const playPromise = video.play()

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked – browser policy
        console.warn("Autoplay blocked by browser")
      })
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        loop
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2019/09/20/27096-361827474_large.mp4"
          type="video/mp4"
        />
      </video>
       {/* Overlay */}
       <div className="absolute inset-0 bg-black/50"></div>

       <div className="absolute top-1/3 lg:left-1/9 sm:left-1/10 z-10 flex flex-col items-start justify-center text-white max-w-xl">
         <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-white/10 border border-white/20 text-xs text-white/80">Developement</div>
         <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-4">Full-Stack Development Solutions</h2>
         <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6">End-to-end web and mobile app development from concept to deployment with modern technologies.</p>
         <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition">Get Started</button>
       </div>
       
    </div>
  )
}

export default Video
