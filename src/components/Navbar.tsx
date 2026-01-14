import { useState } from "react"

const navItems = [
    {name:'Home', path:'/'},
    {name: 'Services', path: '/services'},
    {name: 'Protfolio', path: '/protofolio'},
    {name: 'Case Studies', path: '/casestudies'},
    {name: 'Blog', path: '/blog'},
    {name:'About', path: '/about'},
    {name: 'Contact', path: '/contact'}


]
const Navbar = () => {
    const[isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="w-full bg-gray-100/95 backdrop-blur-2xl border-b border-cyan-400/20 shadow-lg z-50 fixed top-0">
        <nav className="flex items-center lg:justify-evenly justify-between h-20 ">
            <div>
               <img src="https://rococo-otter-c41eee.netlify.app/assets/main1-I0zVaenq.png" alt="logo" className="h-12"/>
            </div>
            <div className="hidden lg:flex space-x-5">
                {navItems.map((item) => (
                    <a key={item.path} className="text-sm font-medium transition-colors py-2 text-cyan-900 hover:text-cyan-900">
                       {item.name} 
                    </a>
                ))}
            </div>

            <div className="hidden lg:inline">
                    <span className="">+(91)265256256</span>
                    <button className="border-2 bg-linear-to-r from-blue-500 to bg-cyan-900  ml-5 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-all shadow-lg hover:from-blue-600 hover:to-cyan-900 active:scale-95
                    hover:scale-105">Get Started</button>
            </div>

            {/* mobile drawer */}
            <div className="lg:hidden">
                <button className="" onClick={()=> setIsOpen(!isOpen)}>{isOpen? 'c': 'o'}</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
