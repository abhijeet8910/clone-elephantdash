import Card2 from "./ui/Card2"

const items = [
  {
    title:'Full Stack Expertise',
    description: 'Experienced developers skilled in modern frameworks and technologies.'
  },
  {
    title:'Agile methdologies',
    description: 'terative development process ensuring fast delivery and continuous improvement.'
  },
  {
    title:'Quality assurance',
    description: 'Rigorous testing and code reviews ensure reliable, bug-free applications.'
  },
  
]
// const Features = () => {
//   return (
//     <section className=" bg-linear-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90 rounded-3xl backdrop-blur-2xl">
//       <main className="min-h-screen flex items-center ">
//         <div className="relative z-10 max-w-7xl mx-auto px-6 ">
//           <div className="grid lg:grid-cols-2 gap-30  z-10">
//              <div className="lg:sticky lg:top-32 flex justify-center">
//               <div className="max-w-md">
//               <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-cyan-400/30 text-sm text-cyan-300 font-semibold backdrop-blur-md" >Capability</div>
//                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" >Expert Development Team</h2>
//                <p className="text-lg text-gray-300 leading-relaxed mb-6" >We combine technical expertise with creative vision to deliver exceptional digital products.</p>
//             </div>
           
//         </div>
//         <div className="space-y-4">
              
//                 {items.map((item, index) => (
//                   <Card2 key={index} title={item.title} description={item.description} />
//                 ))}
              
//             </div>
//         <div className="space-y-4">
      
//         </div>
//       </div>
//       </div>
//       </main>
//     </section>
//   )
// }
const Features = () => {
  return (
    <section className="bg-linear-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90 rounded-3xl backdrop-blur-2xl py-32">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT (STICKY) */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="max-w-md">
              <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-cyan-400/30 text-sm text-cyan-300 font-semibold">
                Capability
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Expert Development Team
              </h2>

              <p className="text-lg text-gray-300">
                We combine technical expertise with creative vision to deliver exceptional digital products.
              </p>
            </div>
          </div>

          {/* RIGHT (CARDS) */}
          <div className="space-y-6">
            {items.map((item, index) => (
              <Card2
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}


export default Features
