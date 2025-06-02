import  { useEffect } from 'react'
import rian from '../assets/rianface.jpg'
import photoframe from "./animation/newphotoframe.json";
import Lottie from 'lottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { jsPDF } from 'jspdf';
// import pdf from '../../public/Rian_Hasan_Siam.pdf'


const Header = () => {


    const handleDownload = () => {
      const url = 'Rian_Resume.pdf'; // File URL
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Rian_Resume.pdf'); // Use 'download' attribute to force download
      document.body.appendChild(link);
      link.click();
      link.remove();
    };





  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      easing: 'ease-in-out-cubic',
    });
  }, []);
  return (
    <div className=' bg-black bgImg bg-fixed py-32 md:py-52 overflow-hidden'>
       

       <div className=' flex flex-col md:flex-row md:items-center gap-10  lg:pl-20  pl-5 container mx-auto'>        <div data-aos="fade-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1200" className='relative group'>

        <Lottie className=" w-[280px] mb-5 md:mb-0 group-hover:scale-105 transition-transform duration-300" animationData={photoframe} />
        <img className='absolute left-[40px] md:left-[40px] top-[40px] lg:left-[40px] w-[200px] h-[200px] rounded-full group-hover:scale-105 transition-transform duration-300' src={rian} alt="" />
        </div>


        <div data-aos="fade-up"
     data-aos-duration="1500" data-aos-delay="300" className=''>          <div className='text-white flex gap-8 text-3xl'>

            <a data-aos="zoom-in" data-aos-delay="500" target='_blank' href="https://github.com/rianhasansiam" className='hover:text-gray-300 hover:scale-125 transition-all duration-300'><i className="fa-brands fa-github"></i></a>
            <a data-aos="zoom-in" data-aos-delay="600" target='_blank' href="https://www.facebook.com/rianhasan1971" className='hover:text-blue-500 hover:scale-125 transition-all duration-300'><i className="fa-brands fa-facebook"></i></a>
            <a data-aos="zoom-in" data-aos-delay="700" target='_blank' href="https://www.linkedin.com/in/rian-hasan-siam/" className='hover:text-blue-600 hover:scale-125 transition-all duration-300'><i className="fa-brands fa-linkedin"></i></a>
            <a data-aos="zoom-in" data-aos-delay="800" target='_blank' href="https://www.instagram.com/rian_hasan_siam/" className='hover:text-pink-500 hover:scale-125 transition-all duration-300'><i className="fa-brands fa-instagram"></i></a>
            <a data-aos="zoom-in" data-aos-delay="900" target='_blank' href="https://t.me/rianhasansiam" className='hover:text-blue-400 hover:scale-125 transition-all duration-300'><i className="fa-brands fa-telegram"></i></a>
         
       
       
       
         
          
          </div>          <div className='my-8'>
            <h1 data-aos="fade-right" data-aos-delay="1000" className='font-extrabold text-5xl md:text-6xl lg:text-7xl animate-pulse'>Rian Hasan Siam</h1>
            <p data-aos="fade-right" data-aos-delay="1200" className='text-3xl md:text-4xl font-semibold mt-2'>Full Stack Devoloper</p>
            <button data-aos="fade-up" data-aos-delay="1400" onClick={handleDownload} className='btn font-semibold my-6 hover:scale-110 transform transition-all duration-300 hover:shadow-lg'>Resume <img className='w-5 h-5 ml-2' src="https://img.icons8.com/?size=100&id=VGQlJM067vkN&format=png&color=000000" alt="" /></button>
          </div>
        </div>
       </div>
       
      
    </div>
  )
}

export default Header
