export const VideoScrollSection = () => {
    return (
      <div className="relative w-full min-h-[300vh]">
  
        {/* Sticky Video */}
        <div className="sticky top-0 h-screen w-full">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2025/08/25/299668_large.mp4" />
          </video>
  
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
  
        {/* Scrolling content */}
        <div className="relative z-10">
          <div className="min-h-screen flex items-center justify-center">
            <h2 className="text-white text-4xl">Slide One</h2>
          </div>
  
          <div className="min-h-screen flex items-center justify-center">
            <h2 className="text-white text-4xl">Slide Two</h2>
          </div>
  
          <div className="min-h-screen flex items-center justify-center">
            <h2 className="text-white text-4xl">Slide Three</h2>
          </div>
        </div>
  
      </div>
    )
  }
  