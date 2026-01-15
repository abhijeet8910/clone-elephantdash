import Card from "./ui/Card"
import { ArrowRight, CircleCheck,LucideGlobe, Smartphone, Palette, Zap, DatabaseIcon } from "lucide-react"

const cardDetails = [
    {
        id:'1',
        logo:LucideGlobe,
        title: 'Web Developement',
        description:'Custom solutions built for your business needs with modern technologies.'
    },
    {
        id:'2',
        logo:Smartphone,
        title: 'App Developement',
        description:'Custom solutions built for your business needs with modern technologies.'
    },
    {
        id:'3',
        logo:Palette,
        title: 'UI/UX Design',
        description:'Custom solutions built for your business needs with modern technologies.'
    },
    {
        id:'4',
        logo:Zap,
        title: 'Performance Optimization',
        description:'Custom solutions built for your business needs with modern technologies.'
    },
    {
        id:'5',
        logo:DatabaseIcon,
        title: 'Backend Solutions',
        description:'Custom solutions built for your business needs with modern technologies.'
    },
]

const details = [
    {
        number:'500+',
        text:'Projects'    
    },
    {
        number:'200+',
        text:'Clients'
    },
    {
        number:'98%',
        text:'Satisfaction'
    }
]


const Hero = () => {
  return (
    <section className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 px-6 py-20">
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 ">
            <div className="text-white">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8">
               Build Digital
               <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-teal-400 via-cyan-400 to-blue-400">
               Experiences That 
            Transform Bussinesses</span>  
            
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-7xl mb-8 leading-relaxed">Transform your ideas into powerful web and mobile applications with cutting-edge technology, stunning design, and seamless user experiences that drive real business results</p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                    <button className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 text-base font-bold text-white shadow-2xl hover:shadow-blue-500/50 transition-all">Get Started Free<ArrowRight/></button>
                    <button className=" inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border-2 border-white/20 text-base font-semibold text-white backdrop-blur-md hover:bg-white/10 transition-all"><CircleCheck/>View Protfolio</button>
                </div>
                <div className="flex items-center gap-8 mt-8">
                    
                        {details.map((item) => (
                            <div>
                           <div className="text-3xl font-bold text-cyan-400">{item.number}</div>
                    <div className="text-sm text-gray-400">{item.text}</div> 
                    </div>
                        ))}
                            
                    
                    

                </div>
           
            </div>
            <div className="grid gap-4 sm:grid-cols-2 py-20 ">
                {cardDetails.map((item) => (
                    <Card logo={<item.logo/>} title={item.title} description={item.description} key={item.id}/>
                ))}

            </div>

        </main>
    </section>
  )
}

export default Hero
