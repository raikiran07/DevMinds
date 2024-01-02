import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Twitter from '../assets/twitter.svg'
import LinkedIn from '../assets/linkedIn.svg'
import Instagram from '../assets/instagram.svg'

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjnrnpn");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

 
  return (
    <div className="contact-container" id="contact">
      <div className="container">
      <h1 className="text-2xl font-medium mt-24 mb-0">Contact</h1>
       <p className="text-sm text-light-gray">reach out to our teams for any business purpose</p>

         <form onSubmit={handleSubmit} className="max-w-96 mx-auto px-5 mt-8">
          <div className="text-left">
                <label htmlFor="email" className="text-left">
              Email Address
            </label> <br/>
            <input
              id="email"
              type="email" 
              name="email"
              className="min-w-full rounded-lg p-2 bg-very-light-purple focus:outline-purple"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="text-left">
                <label htmlFor="domain" className="text-left">
              Email Address
            </label> <br/>
            <select
              id="domain"
              name="domain"
              className="min-w-full rounded-lg p-2 bg-very-light-purple focus:outline-purple"
            >
              <option value="Web development">Web development</option>
              <option value="App development">App development</option>
              <option value="Graphic desiging">Graphic designing</option>
              <option value="Ml&&AI modeling">ML && AI models</option>
              <option value="Video editing">Video editing</option>
              </select>
            
          </div>
      
      <div className="mt-3 text-left">
            <label htmlFor="message">
              Enter message
            </label> <br/>
            <textarea
              id="message"
              name="message"
              className="min-w-full min-h-32 rounded-lg p-2 bg-very-light-purple focus:outline-purple"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
      </div>
      
      
      <button type="submit" 
      disabled={state.submitting}
      className="min-w-full mt-3 py-2 rounded-lg text-white bg-purple"
      >
        Submit
      </button>
      </form>
      </div>
      <div className="container">
      <h1 className="text-2xl font-medium mt-24 mb-0">Join Us</h1>
      <div className="max-w-96 mx-auto">
        <div className="link-item text-center flex justify-center mt-8">
        <a href="#" target="_blank">
          <img src={Twitter} alt="twitter link image" className="min-w-36" />
        </a>
        </div>
        <div className="link-item flex justify-center mt-8">
        <a href="#" target="_blank">
          <img src={LinkedIn} alt="twitter link image" className="min-w-36" />
        </a>
        </div><div className="link-item flex justify-center mt-8 mb-24">
        <a href="#" target="_blank">
          <img src={Instagram} alt="twitter link image" className="min-w-36" />
        </a>
        </div>
        

      </div>
      
      </div>
     

    </div>
     
  );
}

export default ContactForm