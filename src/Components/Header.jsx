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
      const url = 'Rian_Hasan_Siam.pdf'; // File URL
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'RianHasanSiam.pdf'); // Use 'download' attribute to force download
      document.body.appendChild(link);
      link.click();
      link.remove();
    };






  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className=' bg-black bgImg bg-fixed py-32 md:py-52 overflow-hidden'>
       

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

            <a target='_blank' href="https://github.com/rianhasansiam"><i className="fa-brands fa-github"></i></a>
            <a target='_blank' href="https://www.facebook.com/rianhasan1971"><i className="fa-brands fa-facebook"></i></a>
            <a target='_blank' href="https://www.linkedin.com/in/rian-hasan-siam/"><i className="fa-brands fa-linkedin"></i></a>
            <a target='_blank' href="https://www.instagram.com/rian_hasan_siam/"><i className="fa-brands fa-instagram"></i></a>
            <a target='_blank' href="https://t.me/rianhasansiam"><i className="fa-brands fa-telegram"></i></a>
         
       
       
       
         
          
          </div>

          <div className='my-8'>
            <h1 className='font-extrabold text-5xl md:text-6xl lg:text-7xl'>Rian Hasan Siam</h1>
            <p className='text-3xl md:text-4xl font-semibold'>Full Stack Devoloper</p>
            <button onClick={handleDownload} className='btn   font-semibold my-6 '>Resume <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=VGQlJM067vkN&format=png&color=000000" alt="" /></button>
          </div>
        </div>
       </div>
       
      
    </div>
  )
}

export default Header
