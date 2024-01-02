import {React,useState} from 'react'
import Logo from '../assets/logo.png'
import Menu from '../assets/menu.svg'
import Close from '../assets/clos.svg'
import HeroImage from '../assets/hero.png'
import { motion,useInView,useAnimation } from "framer-motion"



const Home = () => {
const [isOpen,setIsOpen] = useState(false)



  return (
    <div className="header min-h-screen relative" id="home">
        <nav className="max-w-96 mx-auto flex justify-between content-cneter pt-3 lg:max-w-full">
        <div className="logo mx-w-30">
            <img src={Logo} alt="company logo" />
        </div>
        <div className="menu-bar mx-w-30">
            <img src={Menu} alt="menu button" onClick={()=>setIsOpen(!isOpen)} />
        </div>

    </nav>
    <div className="hero-container max-w-96 mt-24 mx-auto lg:max-w-full">
        <h1 className="font-monst text-4xl font-bold tracking-wider text-center lg:text-5xl">WELCOME   TO DEVMINDS</h1>
        <p className="gray-text text-sm">we craft your ideas into reality 🚀</p>
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
       transition={{duration:0.8}}
       >
       <button className="btn join-btb  mr-3 px-4 py-2 rounded-full bg-purple text-white">JOIN US</button>
        <button className="btn contact-btn outline-purple ml-3 px-4 py-2 rounded-full text-purple">CONTACT</button>
       </motion.div>
       
       

    </div>

    {
      <div className={`mobile-sidebar  bg-light-purple ${isOpen ? "open" : ""}`}>
        <div>
          <div className="abolute bottom-0 flex items-center justify-end ">
            <img src={Close} alt="close svg" className="w-8 close-btn" onClick={()=>setIsOpen(!isOpen)} />
          </div>
        <ul>
          <li className="text-xl font-medium mt-5 mb-2" onClick={()=>setIsOpen(!isOpen)}>
            <a href="#home">Home</a>
          </li>
          <li className="text-xl font-medium my-2" onClick={()=>setIsOpen(!isOpen)}>
            <a href="#projects">Projects</a>
          </li>
          <li className="text-xl font-medium my-2" onClick={()=>setIsOpen(!isOpen)}>
            <a href="#services">Services</a>
          </li>
          <li className="text-xl font-medium my-2" onClick={()=>setIsOpen(!isOpen)}>
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