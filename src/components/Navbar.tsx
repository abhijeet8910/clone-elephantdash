import { useState } from "react"
import { Menu, X } from "lucide-react";

const navItems = [
    {name:'Home', path:'/'},
    {name: 'Services', path: '/services'},
    {name: 'Protfolio', path: '/protofolio'},
    {name: 'Case Studies', path: '/casestudies'},
    {name: 'Blog', path: '/blog'},
    {name:'About', path: '/about'},
    {name: 'Contact', path: '/contact'}


]

const serviceItems = [
    {name: 'Web Developement', path: '/'},
    {name: 'App Developement', path:''},
    {name:'SEO', path: ''}
]
const Navbar = () => {
    const[isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="w-full bg-gray-100/95 backdrop-blur-2xl border-b border-cyan-400/20 shadow-lg z-50 fixed top-0 ">
        <nav className="flex items-center justify-between px-8 py-6 h-20 max-w-7xl mx-auto ">
            <div>
               <img src="https://rococo-otter-c41eee.netlify.app/assets/main1-I0zVaenq.png" alt="logo" className="h-12"/>
            </div>
            <div className="hidden lg:flex justify-center items-center text-cyan-900 space-x-5 text-sm font-medium transition-colors">
                {navItems.map((item) => {
                    if(item.name === 'Services') {
                        return(
                            <div className="relative group cursor-pointer">
                                <span>Services</span>
                                <ul className="hidden group-hover:flex flex-col space-y-2 absolute top-full left-0 border bg-slate-200 p-4 rounded-md ">
                                    {serviceItems.map((item, index) => (
                                        <a href="" key={index} className="hover:bg-blue-400">{item.name}</a>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                    else {
                        return(
                    <a href= ''key={item.path} className=" py-2  hover:text-cyan-900">
                       {item.name} 
                    </a>
                        )
                    }
})}
            </div>

            <div className="hidden lg:inline">
                    <span className="">+(91)265256256</span>
                    <button className="border-2 bg-linear-to-r from-blue-500 to bg-cyan-900  ml-5 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-all shadow-lg hover:from-blue-600 hover:to-cyan-900 active:scale-95
                    hover:scale-105">Get Started</button>
            </div>

            {/* mobile drawer */}
            <div className="lg:hidden">
                <button className="" onClick={()=> setIsOpen(!isOpen)}>{isOpen? <X/>: <Menu/>}</button>
            </div>

            {/* mobile view */}
            {isOpen && (
                <div className="lg:hidden border-t border-cyan-400/20 bg-white backdrop-blur-xl px-6 py-6 space-y-4 absolute top-20 left-0 w-full flex flex-col text-sm font-medium transition-colors text-cyan-900">
                    
                {navItems.map((item) => {
                    if(item.name === 'Services') {
                        return (
                            <div>
                                <span>Services</span>
                                <ul className="flex flex-col space-y-4 pl-4">
                                {serviceItems.map((item,index) => (
                                    <a href="" key={index}>{item.name}</a>
                                ))}
                            </ul>
                            </div>
                            
                        )
                    }
                    else {
                        return(
                    <a key={item.path} className=" py-2  hover:text-cyan-900">
                       {item.name} 
                    </a>
                 ) }
})}
            <div className="flex flex-col ">
                    <span className="text-center">+(91)265256256</span><br />
                    <button className="border-2 bg-linear-to-r from-blue-500 to bg-cyan-900  px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-all shadow-lg hover:from-blue-600 hover:to-cyan-900 active:scale-95
                    hover:scale-105 w-full">Get Started</button>
            </div>

            </div>
            )}
            
        </nav>
    </header>
  )
}

export default Navbar
