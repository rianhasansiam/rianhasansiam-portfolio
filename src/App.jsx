
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer'
import About from './Components/About'
import AContact from './Components/AContact'




function App() {

  return (
    <>

    <Navbar/>
    <Header/>
    <Skills/>
    <Education/>
    <Projects/>    <About/>
  
    <AContact></AContact>
    <Footer/>
    <ToastContainer />

   
      
    </>
  )
}

export default App
