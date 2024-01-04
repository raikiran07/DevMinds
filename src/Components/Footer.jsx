import React from 'react'

import {useState} from 'react'
import Accordian from '../Components/Accordian'
import { motion,useInView,useAnimation } from "framer-motion"

const Footer = () => {
    const [isOpen,setIsOpen] = useState(false)

    const changeOpen = () => {
        console.log()
        console.log(isOpen)
        setIsOpen(!isOpen)
    }
    const faqs = [
        {
          question:"why to go online?",
          answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolor."
        },
        {
          question:"How to go online?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus quibusdam laborum tenetur dolorum animi itaque ea optio pariatur eum!"
        },
        {
          question:"How much it cost to go online?",
          answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vel, dolorum similique mollitia eum ullam labore iusto nulla odit maiores?"
        }
      ]
  return (
    <>
    <div className="min-w-full  py-4 faq-container">
        <div className="container max-w-96 mx-auto lg:max-w-2xl">
          <div className="container">
            
          <h1 className="text-left text-2xl font-medium pt-16 mb-3">FAQ's</h1>
          <div className="faq pb-16">
                {
                    faqs.map(item=>{
                        return(<Accordian
                        question={item.question}
                        answer = {item.answer}
                             />)
                    })
                }
                

            </div>
          </div>
           
            
        </div>
    </div>
    <div className="container min-w-full bg-light-purple">
      <div className="flex-container flex justify-around text-left pt-16 max-w-4xl mx-auto">
      <div>
              <h1 className="font-normal text-base lg:text-xl lg:font-medium">About</h1>
              <p className="font-thin text-xs max-w-32 text-white lg:text-base lg:font-base lg:max-w-48">we are a cost-effective IT solutions service provider, dedicated to delivering professional websites and applications that empower businesses to thrive in the digital landscape.</p>
            </div>
            <div>
              <h1 className="font-normal text-base lg:text-xl lg:font-medium">Links</h1>
              <ul className="font-thin text-xs text-white lg:text-base lg:font-base">
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/devmindstech/" target="_blank">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-normal text-base lg:text-xl lg:font-medium">Address</h1>
              <p className="font-thin text-xs text-white lg:text-base lg:font-base">We operate remotely</p>
            </div>
      </div>
            
           </div>
           <div className="about-section text-sm text-very-light-purple bg-light-purple p-5 pb-16 pt-16">
            <span className="min-w-32">&#169;</span> all rights reserved by DevMinds
            </div>
    </>
  )
}

export default Footer