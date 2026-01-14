import Card from "./ui/Card"

const cardDetails = [
    {
        id:'1',
        logo:'',
        title: 'Web Developement',
        description:''
    },
    {
        id:'2',
        logo:'',
        title: 'App Developement',
        description:''
    },
    {
        id:'3',
        logo:'',
        title: '',
        description:''
    },
    {
        id:'4',
        logo:'',
        title: '',
        description:''
    },
    {
        id:'5',
        logo:'',
        title: '',
        description:''
    },
]


const Hero = () => {
  return (
    <section className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 px-6 py-20">
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 ">
            <div className="text-white">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
                Build Digital 
            Experiences That 
            Transform Bussinesses
                </h1>
           
            </div>
            <div className="grid gap-4 sm:grid-cols-2 py-20">
                {cardDetails.map((item) => (
                    <Card logo={item.logo} title={item.title} description={item.description}/>
                ))}

            </div>

        </main>
    </section>
  )
}

export default Hero
