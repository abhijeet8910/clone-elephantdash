import Card2 from "./Card2"

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

const FeatureBlock = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20">

        <div className="lg:sticky lg:top-32">
            
          <div className="max-w-md">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-cyan-400/30 text-sm text-cyan-300 font-semibold">
      Capability
            </div>
     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Expert Development Team
    </h2>

     <p className="text-lg text-gray-300">
       We combine technical expertise with creative vision to deliver exceptional digital products.     </p>
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
    
   
  )
}

export default FeatureBlock


// <div className="grid lg:grid-cols-2 gap-20">

// {/* LEFT (STICKY) */}
// <div className="lg:sticky lg:top-32 h-fit">
//   <div className="max-w-md">
//     <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-cyan-400/30 text-sm text-cyan-300 font-semibold">
//       Capability
//     </div>

//     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//       Expert Development Team
//     </h2>

//     <p className="text-lg text-gray-300">
//       We combine technical expertise with creative vision to deliver exceptional digital products.
//     </p>
//   </div>
// </div>

// {/* RIGHT (CARDS) */}
// <div className="space-y-6">
//   {items.map((item, index) => (
//     <Card2
//       key={index}
//       title={item.title}
//       description={item.description}
//     />
//   ))}
// </div>

// </div>
