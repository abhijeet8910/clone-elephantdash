

const items = ['TechCorp', 'StartupHub', 'DigitalFlow','CloudSync', 'AppVenture', 'WebForge', 'CodeCraft', 'DevStudio']

const Partners = () => {
  return (
    <div className="absolute w-full bg-linear-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90 h-screen ">
        <div className="relative top-20 z-10 max-w-7xl mx-auto px-6">
            <div className="  grid lg:grid-cols-2 gap-12 items-end mb-16">
                <div>
                <p className="text-sm uppercase text-cyan-400 font-semibold mb-4 tracking-widest">Trusted Partenrs</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Trusted by Comapnies
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400"> across Industries</span></h2>
                </div>
                <p className="text-lg text-gray-300 max-w-xl leading-relaxed">From fast-growing startups to established enterprises, businesses rely on us for innovative, scalable web and app development solutions.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                    {items.map((item) => (
                        <div className="flex items-center justify-center rounded-2xl py-8 bg-white/5 border border-white/10 text-base font-semibold text-white backdrop-blur-md hover:bg-white/10 transition-all">
                            <p className="text-base font-semibold text-gray-300 tracking-wide">{item}</p>
                            </div>
                        
                    ))}
            </div>

        </div>
      
    </div>
  )
}

export default Partners

