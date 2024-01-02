import {React,useState} from 'react'
import Plus from '../assets/plus.svg'
import Minus from '../assets/minus.svg'

const Accordian = ({question,answer}) => {
    const [isActive,setIsActive] = useState(false)
  return (
    <div className="item text-left border-very-light-purple rounded-lg bg-light-white mb-2">
    <div className="question flex items-center justify-between p-2 ">
        {question}
        <div>
            <img src={!isActive ? Plus : Minus} alt="plus icon" className="min-w-5" onClick={()=>setIsActive(!isActive)} />
        </div>
    </div>
    {
        isActive &&  <div className="answer p-2">{answer}</div>
    }
   
    </div>
  )
}

export default Accordian