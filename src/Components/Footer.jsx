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
    <div className="min-w-full  bg-light-purple py-4">
        <div className="container max-w-96 mx-auto lg:max-w-5xl">
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
            <div className="about-section text-sm text-very-light-purple">
            <span className="min-w-32">&#169;</span> all rights reserved by DevMinds
            </div>
        </div>
    </div>
  )
}

export default Footer