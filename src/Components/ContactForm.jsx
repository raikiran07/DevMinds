import {React,useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Twitter from '../assets/twitter.svg'
import LinkedIn from '../assets/linkedIn.svg'
import Instagram from '../assets/instagram.svg'
import axios from 'axios'
import { motion,useInView,useAnimation } from "framer-motion"

function ContactForm() {
  // const [state, handleSubmit] = useForm("xbjnrnpn");
  const [submitted,setSubmit] = useState(false)
  // const [useremail,setUserEmail] = useState("");
  // const [message,setMessage] = useState("")

  // if (state.succeeded) {
      
  //     setUserEmail("")
  //     setMessage("")
     

  //     console.log("form submitted!")
      
  // }

  const [formData, setFormData] = useState({
    domain: 'Web development',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value,[e.target.message]:e.target.message,[e.target.domain]:e.target.domain });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'your-formspree-endpoint' with your Formspree endpoint
      const response = await axios.post('https://formspree.io/xbjnrnpn', formData);

      // Handle success (optional)
      setSubmit(true)
      setFormData({
        domain: 'Web development',
        email: '',
        message: '',
      })
      setTimeout(()=>{
        setSubmit(false)
      },5000)
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      // Handle error (optional)
      console.error('Form submission error:', error);
    }
  };

 
  return (
    <div className="contact-container bg-[#F3F8FF] min-w-full flex flex-col justify-center items-center  lg:flex-row  lg:max-w-5xl mx-auto   px-16 mt-16  lg:px-32 " id="contact">
      <div className="container lg:w-[60%] ">
      <h1 className="text-2xl font-medium  mb-0 lg:mt-0 lg:text-4xl lg:font-bold pt-16">Contact</h1>
       <p className="text-xs text-light-gray font-light">reach out to our teams for any business purpose</p>

         <form onSubmit={handleSubmit} className="w-full px-5 mt-8 lg:w-[80%] lg:pb-16 lg:ml-16 ">
          <div className="text-left">
                <label htmlFor="email" className="text-left text-light-gray text-sm">
              Email Address
            </label> <br/>
            <input
              id="email"
              type="email" 
              name="email"
              className="min-w-full rounded-lg p-3 border border-5 border-purple  focus:outline-purple"
              value={formData.email}
              onChange={handleChange}
              required
            />
           
          </div>
          <div className="text-left mt-3">
                <label htmlFor="domain" className="text-left text-light-gray text-sm">
              Select Domain
            </label> <br/>
            <select
              id="domain"
              name="domain"
              className="min-w-full rounded-lg p-2 border border-5 border-purple focus:outline-purple text-purple text-sm"
              value={formData.domain}
              onChange={handleChange}
              required
            >
              <option value="Web development">Web development</option>
              <option value="App development">App development</option>
              <option value="Graphic desiging">Graphic designing</option>
              <option value="Ml&&AI modeling">ML && AI models</option>
              <option value="Video editing">Video editing</option>
              </select>
            
          </div>
      
      <div className="mt-3 text-left">
            <label htmlFor="message" className="text-light-gray text-sm">
              Enter message
            </label> <br/>
            <textarea
              id="message"
              name="message"
              className="min-w-full min-h-32 rounded-lg p-2 border border-5 border-purple focus:outline-purple"
              value={formData.message}
              onChange={handleChange}
              required
            />
         
      </div>
      
      <div className="text-left">
      <button type="submit" 
      className="w-full mt-3 py-2 rounded-lg text-white bg-purple lg:w-[20%] border"
      >
        Submit
      </button>
      </div>
     
      {
        submitted && <motion.h3 
        className="text-purple max-w-96 text-center  bg-very-light-purple p-3 mt-2 rounded-lg"
        initial={{ opacity: 0,scaleX:0 }}
        whileInView={{ opacity: 1,scaleX:1 }}
        transition={{duration:0.5}}
        >Thanks! we got your message</motion.h3>
      }
      
      </form>
      </div>
      <div className="container  lg:pb-8  mt-16 lg:mt-0 lg:rounded-md  lg:w-[40%] ">
      <motion.h1 className="text-2xl font-medium pt-16 mb-0 lg:mt-[-7rem] lg:text-4xl lg:font-bold lg:pt-0"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1}}
       transition={{duration:2}}
      >Join Us</motion.h1>
      <p className="text-center text-xs font-light text-purple">we are the budding IT solution team,
                      don’t forget to follow us. </p>
      <div className="max-w-96 mx-auto mt-4 flex justify-around lg:items-start">
        <motion.div className="link-item text-center flex justify-center mt-8 lg:mt-10" 
         initial={{ opacity: 0,scale:0.2,rotate:20 }}
         whileInView={{ opacity: 1,scale:1,rotate:0}}
         transition={{duration:1}}
        >
        <a href="#" target="_blank">
          <img src={Twitter} alt="twitter link image" className="max-w-36 " />
        </a>
        </motion.div>
        <motion.div className="link-item flex justify-center mt-8 lg:mt-10"
        initial={{ opacity: 0,rotate:20,scale:0.2 }}
        whileInView={{ opacity: 1,rotate:0,scale:1}}
        transition={{duration:1}}
        >
        <a href="#" target="_blank">
          <img src={LinkedIn} alt="twitter link image" className="max-w-36" />
        </a>
        </motion.div>
        
        <motion.div className="link-item flex justify-center mt-8 mb-24 lg:mt-10"
        initial={{ opacity: 0,scale:0.2,rotate:20 }}
        whileInView={{ opacity: 1,scale:1,rotate:0}}
        transition={{duration:1}}
        >
        <a href="https://www.instagram.com/devmindstech/" target="_blank">
          <img src={Instagram} alt="instagram link image" className="max-w-36" />
        </a>
        </motion.div>
        

      </div>
      
      </div>
     

    </div>
     
  );
}

export default ContactForm