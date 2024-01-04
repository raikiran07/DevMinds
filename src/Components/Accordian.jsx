import {React,useState} from 'react'
import Plus from '../assets/plus.svg'
import Minus from '../assets/minus.svg'
import { motion,useInView,useAnimation } from "framer-motion"

const Accordian = ({question,answer}) => {
    const [isActive,setIsActive] = useState(false)
  return (
    <div className="item text-left border-very-light-purple rounded-lg bg-light-white mb-2">
    <div className="question flex items-center justify-between p-2 font-light" onClick={()=>setIsActive(!isActive)}>
        {question}
        <div>
            <img src={!isActive ? Plus : Minus} alt="plus icon" className="min-w-5" />
        </div>
    </div>
    {
        isActive &&  <motion.div className="answer p-2 font-light border-t-2 border-purple"
        initial={{ heigt:0 }}
        whileInView={{ height:100 }}
        transition={{duration:0.8}}

        >{answer}</motion.div>
    }
   
    </div>
  )
}

export default Accordian