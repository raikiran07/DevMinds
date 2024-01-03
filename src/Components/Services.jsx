import React from 'react'
import Web from '../assets/web.svg'
import App from '../assets/app.svg'
import Graphic from '../assets/graphic.svg'
import Ml from '../assets/ml.svg'
import Video from '../assets/video.svg'
import { motion,useInView,useAnimation } from "framer-motion"

const Services = () => {
  return (
    <div className="service-container min-w-full p-3 min-h-72 " id="services">
        <motion.h1 className="text-2xl font-medium mt-2 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{duration:2}}
        >Our Services</motion.h1>
        <div className="container max-w-96 mx-auto px-5 flex flex-col gap-16 lg:max-w-3xl">
            <div className="service flex content-center justify-center gap-4">
                <motion.div className="service-flex-container bg-dark-white text-center min-w-32 p-2 rounded-lg light-shadow lg:w-3/5 lg:h-48"
                initial={{ opacity: 0,x:-50 }}
                whileInView={{ opacity: 1,x:0}}
                transition={{duration:1}}
                >
                    <div className=""
                    
                    >
                    <div className="image-container flex justify-center px-3 pt-2 lg:min-w-40">
                    <img src={Web} alt="web icon" />
                    </div>
                   
                    <p className="text-xs max-w-100 text-light-gray">Web development</p>
                    </div>
                    
                </motion.div>
                <motion.p className="text-left text-sm text-gray lg:pt-4 font-thin"
                initial={{ opacity: 0,x:50 }}
                whileInView={{ opacity: 1,x:0}}
                transition={{duration:1}}
                >We offer affordable website development services, delivering high-quality solutions tailored to your needs.</motion.p>
            </div>
            <div className="service flex flex-row-reverse content-center ">
                <motion.div className="service-flex-container bg-dark-white text-center min-w-32 p-2 rounded-lg light-shadow lg:w-3/5 lg:h-48"
                 initial={{ opacity: 0,x:50 }}
                 whileInView={{ opacity: 1,x:0}}
                 transition={{duration:1,delay:1}}
                >
                    <div className="">
                    <div className="image-container flex justify-center px-3 pt-2">
                    <img src={App} alt="app icon" />
                    </div>
                   
                    <p className="text-xs max-w-100 text-light-gray">App development</p>
                    </div>
                    
                </motion.div>
                <motion.p className="text-left text-sm text-gray font-thin "
                initial={{ opacity: 0,x:-50 }}
                whileInView={{ opacity: 1,x:0}}
                transition={{duration:1,delay:1}}
                >We provide budget-friendly app development services, delivering high-quality solutions customized to meet your specific requirements.</motion.p>
            </div>
            <div className="service flex content-center justify-center gap-4"
            >
                <motion.div className="service-flex-container bg-dark-white text-center min-w-32 p-2 rounded-lg light-shadow lg:w-3/5 lg:h-48"
                initial={{ opacity: 0,x:-50 }}
                whileInView={{ opacity: 1,x:0}}
                transition={{duration:1,delay:1}}
                >
                    <div className="">
                    <div className="image-container flex justify-center px-3 pt-2">
                    <img src={Graphic} alt="graphic design icon" />
                    </div>
                   
                    <p className="text-xs max-w-100 text-light-gray">Graphic designing</p>
                    </div>
                   
                </motion.div>
                <motion.p className="text-left text-sm text-gray font-thin"
                initial={{ opacity: 0,x:50 }}
                whileInView={{ opacity: 1,x:0}}
                transition={{duration:1,delay:1}}
                >We offer cost-effective graphic design services, delivering high-quality and customized solutions to elevate your visual brand presence.</motion.p>
            </div>
            <div className="service flex flex-row-reverse content-center ">
                <motion.div className="service-flex-container bg-dark-white text-center min-w-32 p-2 rounded-lg light-shadow lg:w-3/5 lg:h-48"
                initial={{ opacity: 0,x:50 }}
                whileInView={{ opacity: 1,x:0}}
                transition={{duration:1,delay:1}}
                >
                    <div className="">
                    <div className="image-container flex justify-center px-3 pt-2">
                    <img src={Ml} alt="ml&ai icon" />
                    </div>
                   
                    <p className="text-xs max-w-100 text-light-gray">ML and AI</p>
                    </div>
                    
                </motion.div>
                <motion.p className="text-left text-sm text-gray font-thin"
                initial={{ opacity: 0,x:-50 }}
                whileInView={{ opacity: 1,x:0}}
                transition={{duration:1,delay:1}}
                >Discover our budget-friendly AI and ML model development services, where we create high-quality and tailored solutions to meet your unique needs.</motion.p>
            </div>
            <div className="service flex content-center justify-center gap-4 pb-12">
                <motion.div className="service-flex-container bg-dark-white text-center min-w-32 p-2 rounded-xl  light-shadow lg:w-3/5 lg:h-48"
                initial={{ opacity: 0,x:-50 }}
                whileInView={{ opacity: 1,x:0}}
                transition={{duration:1,delay:1}}
                >
                    <div className="">
                    <div className="image-container flex justify-center px-3 pt-2">
                    <img src={Video} alt="video editing icon" />
                    </div>
                   
                    <p className="text-xs max-w-100 text-light-gray">Video editing</p>
                    </div>
                    
                </motion.div>
                <motion.p className="text-left text-sm text-gray font-thin"
                initial={{ opacity: 0,x:50 }}
                whileInView={{ opacity: 1,x:0}}
                transition={{duration:1,delay:1}}
                >Experience our budget-conscious video editing services, where we skillfully craft high-quality and personalized solutions to elevate your visual content.</motion.p>
            </div>
        </div>

    </div>
  )
}

export default Services