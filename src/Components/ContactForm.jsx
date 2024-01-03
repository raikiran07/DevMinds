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
    <div className="contact-container" id="contact">
      <div className="container">
      <h1 className="text-2xl font-medium mt-24 mb-0">Contact</h1>
       <p className="text-xs text-purple font-thin">reach out to our teams for any business purpose</p>

         <form onSubmit={handleSubmit} className="max-w-96 mx-auto px-5 mt-8">
          <div className="text-left">
                <label htmlFor="email" className="text-left text-light-gray text-sm">
              Email Address
            </label> <br/>
            <input
              id="email"
              type="email" 
              name="email"
              className="min-w-full rounded-lg p-2 bg-very-light-purple focus:outline-purple"
              value={formData.email}
              onChange={handleChange}
              required
            />
           
          </div>
          <div className="text-left">
                <label htmlFor="domain" className="text-left text-light-gray text-sm">
              Select Domain
            </label> <br/>
            <select
              id="domain"
              name="domain"
              className="min-w-full rounded-lg p-2 bg-very-light-purple focus:outline-purple text-purple text-sm"
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
              className="min-w-full min-h-32 rounded-lg p-2 bg-very-light-purple focus:outline-purple"
              value={formData.message}
              onChange={handleChange}
              required
            />
         
      </div>
      
      
      <button type="submit" 
      className="min-w-full mt-3 py-2 rounded-lg text-white bg-purple"
      >
        Submit
      </button>
      {
        submitted && <motion.h3 
        className="text-purple max-w-96 text-center bg-very-light-purple p-3 mt-2 rounded-lg"
        initial={{ opacity: 0,scaleX:0 }}
        whileInView={{ opacity: 1,scaleX:1 }}
        transition={{duration:0.5}}
        >Thanks! we got your message</motion.h3>
      }
      
      </form>
      </div>
      <div className="container">
      <motion.h1 className="text-2xl font-medium mt-24 mb-0"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1}}
       transition={{duration:2}}
      >Join Us</motion.h1>
      <p className="text-center text-xs font-thin">we are the budding IT solution team,
                      don’t forget to follow us. </p>
      <div className="max-w-96 mx-auto">
        <motion.div className="link-item text-center flex justify-center mt-8" 
         initial={{ opacity: 0,scale:0.5 }}
         whileInView={{ opacity: 1,scale:1}}
         transition={{duration:1}}
        >
        <a href="#" target="_blank">
          <img src={Twitter} alt="twitter link image" className="min-w-36" />
        </a>
        </motion.div>
        <motion.div className="link-item flex justify-center mt-8"
        initial={{ opacity: 0,scale:0.5 }}
        whileInView={{ opacity: 1,scale:1}}
        transition={{duration:1}}
        >
        <a href="#" target="_blank">
          <img src={LinkedIn} alt="twitter link image" className="min-w-36" />
        </a>
        </motion.div>
        
        <motion.div className="link-item flex justify-center mt-8 mb-24"
        initial={{ opacity: 0,scale:0.5 }}
        whileInView={{ opacity: 1,scale:1}}
        transition={{duration:1}}
        >
        <a href="#" target="_blank">
          <img src={Instagram} alt="twitter link image" className="min-w-36" />
        </a>
        </motion.div>
        

      </div>
      
      </div>
     

    </div>
     
  );
}

export default ContactForm