
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer'




function App() {


  return (
    <>

    <Navbar/>
    <Header/>
    <Skills/>
    <Education/>
    <Projects/>
    <Contact/>
    <Footer/>
    <ToastContainer />

   
      
    </>
  )
}

export default App
