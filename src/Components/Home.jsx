import {React,useState} from 'react'
import Logo from '../assets/logo.png'
import Menu from '../assets/menu.svg'
import Close from '../assets/clos.svg'
import HeroImage from '../assets/hero.png'
import { motion,useInView,useAnimation } from "framer-motion"



const Home = () => {
const [isOpen,setIsOpen] = useState(false)



  return (
    <div className="header min-h-screen relative bg-[#F3F8FF]" id="home">
        <nav className="max-w-96 mx-auto flex justify-between content-cneter pt-3 lg:max-w-full lg:px-16">
        <div className="logo mx-w-30">
            <img src={Logo} alt="company logo" />
        </div>
        <div className="menu-bar mx-w-30 lg:hidden">
            <img src={Menu} alt="menu button" onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer" />
        </div>
        <div className="desktop-link hidden lg:block">
          <ul className="flex items-center justify-around gap-5">
          <li className="text-md font-medium text-purple hover:text-very-light-purple">
            <a href="#home">Home</a>
          </li>
          <li className="text-md font-medium text-purple hover:text-very-light-purple">
            <a href="#services">Services</a>
          </li>
          <li className="text-md font-medium text-purple hover:text-very-light-purple">
            <a href="#projects">Projects</a>
          </li>
          
          <li className="text-md font-medium text-purple hover:text-very-light-purple">
            <a href="#contact">Contact</a>
          </li>
          </ul>
        </div>

    </nav>
    <div className="hero-container max-w-96 mt-24 mx-auto lg:max-w-full">
        <motion.h1 className="font-monst text-4xl font-bold tracking-wider text-center lg:text-5xl text-[#9B66FD]"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1}}
         transition={{duration:3}}
        >WELCOME   TO DEVMINDS</motion.h1>
        <p className="gray-text text-xs font-thin lg:text-sm lg:font-normal">we craft your ideas into reality 🚀</p>
        <motion.div 
        className="hero-image-container text-center lg:max-w-xl mx-auto"
        initial={{ opacity: 0,y:155 }}
        whileInView={{ opacity: 1,y:0 }}
        transition={{duration:0.8}}
        >
        <img src={HeroImage} alt="hero image" />
        </motion.div>
       <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1}}
       transition={{duration:0.8,delay:0.3}}
       >
        <a href="#contact">
        <button className="btn join-btb  mr-3 px-4 py-2 rounded-full bg-purple text-white">JOIN US</button>
        </a>
       
       <a href="#contact">
       <button className="btn contact-btn outline-purple ml-3 px-4 py-2 rounded-full text-purple">CONTACT</button>
       </a>
       
       </motion.div>
       
       

    </div>

    {
      <div className={`mobile-sidebar bg-gray-dark  ${isOpen ? "open" : ""}`}>
        <div>
          <div className="abolute bottom-0 flex items-center justify-end ">
            <img src={Close} alt="close svg" className="w-8 close-btn cursor-pointer" onClick={()=>setIsOpen(!isOpen)} />
          </div>
        <ul className="text-very-light-purple">
          <li className="text-xl font-medium mt-5 mb-2 hover:text-purple-400" onClick={()=>setIsOpen(!isOpen)}>
            <a href="#home">Home</a>
          </li>
          
          <li className="text-xl font-medium my-2 hover:text-purple-400" onClick={()=>setIsOpen(!isOpen)}>
            <a href="#services">Services</a>
          </li>
          <li className="text-xl font-medium my-2 hover:text-purple-400" onClick={()=>setIsOpen(!isOpen)}>
            <a href="#projects">Projects</a>
          </li>
          <li className="text-xl font-medium my-2 hover:text-purple-400" onClick={()=>setIsOpen(!isOpen)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        </div>
        
      </div>
    }


    </div>
    
  )
}

export default Home