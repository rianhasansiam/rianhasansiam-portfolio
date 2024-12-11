import  { useEffect } from 'react'
import rian from '../assets/IMG_20231007_230509646_processed.jpg'
import photoframe from "./animation/newphotoframe.json";
import Lottie from 'lottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className=' bg-black bgImg bg-fixed py-32 md:py-52'>
       

       <div className=' flex flex-col md:flex-row md:items-center gap-10  lg:pl-20  pl-5 container mx-auto'>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='relative'>

        <Lottie className=" w-[280px] mb-5 md:mb-0" animationData={photoframe} />
        <img className='absolute left-[40px] md:left-[40px] top-[40px] lg:left-[40px] w-[200px] h-[200px] rounded-full ' src={rian} alt="" />
        </div>


        <div data-aos="fade-up"
     data-aos-duration="3000" className=''> 
          <div className='text-white flex gap-8 text-3xl'>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-telegram"></i>
          
          </div>

          <div className='my-8'>
            <h1 className='font-extrabold text-5xl md:text-6xl lg:text-7xl'>Rian Hasan Siam</h1>
            <p className='text-3xl md:text-4xl font-semibold'>Full Stack Devoloper</p>
          </div>
        </div>
       </div>
       
      
    </div>
  )
}

export default Header