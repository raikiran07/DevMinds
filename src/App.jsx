

import './App.css'
import Home from './Components/Home'
import Services from './Components/Services'
import Contact from './Components/ContactForm'
import Footer from './Components/Footer'
import Loading from './Components/LoadingPage'
import Showcase from './Components/Showcase'
import Testimonials from './Components/Testimonials'



function App() {
  
  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  
  

  

  return (
    <div className="w-full">
     
      <Loading />
     
      <Home/>
      <Services/>
      <Showcase />
      <Testimonials/>
      <Contact />
      <Footer />

     
    </div>
  )
}

export default App
