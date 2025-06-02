import  { useEffect } from 'react'
import react from '../assets/logo512.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      easing: 'ease-in-out-cubic',
      delay: 100,
    });
  }, []);
  const skills=[
    { skillName: "React", skillImage: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000" },
    { skillName: "JavaScript", skillImage: "https://img.icons8.com/?size=100&id=MjuloYXjXHYT&format=png&color=000000" },
    { skillName: "HTML5", skillImage: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
    { skillName: "CSS3", skillImage: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
    { skillName: "Tailwind", skillImage: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
    { skillName: "C", skillImage: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000" },
    { skillName: "Node.js", skillImage: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
    { skillName: "Express.js", skillImage: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000" },
    { skillName: "Next.js", skillImage: "https://img.icons8.com/?size=100&id=MWiBjKuHeMVq&format=png&color=000000" },
    { skillName: "git", skillImage: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
    { skillName: "GitHub", skillImage: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" },
    { skillName: "Firebase", skillImage: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000" },
    { skillName: "Photoshop", skillImage: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000" },
    { skillName: "Illustrator", skillImage: "https://img.icons8.com/?size=100&id=13631&format=png&color=000000" },
    { skillName: "Figma", skillImage: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
    { skillName: "Canva", skillImage: "https://img.icons8.com/?size=100&id=HGd2amAYhRGr&format=png&color=000000" },
    { skillName: "MongoDB", skillImage: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" },
    // { skillName: "SQL", skillImage: "https://img.icons8.com/?size=100&id=qGUfLiYi1bRN&format=png&color=000000" }
  ]
  
  




  return (
    <div id='skills' className='container mx-auto flex flex-col lg:flex-row items-center gap-10 py-20 overflow-hidden'>
    
    <div data-aos="fade-right" className=' w-[95%]  md:w-[80%]'>
        <h1 className='text-5xl py-5 font-bold'>SKILLS</h1>
        <img className='w-[13%] py-3' src={react} alt="" />
        <h1 className='font-semibold text-3xl pb-5'>Full Stack Web Development</h1>
        <p className='py-5'>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>



        <span className='font-semibold text-lg '> Tech Stack:  </span>        <div data-aos="fade-up" data-aos-delay="200" className='flex flex-wrap '>

        {
        skills.map((eachSkill, index) => (
    <button key={index} className="bg-white text-black rounded-xl px-3 py-1 font-semibold mx-2 my-1 block hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"> {eachSkill.skillName} </button>
  ))
}
        </div>





      
    </div>


    <div data-aos="fade-left" data-aos-delay="400" className='md:flex gap-5 flex-wrap grid grid-cols-2  '> 

      {skills.map((eachSkill,index)=><div key={index} data-aos="zoom-in" data-aos-delay={`${600 + index * 100}`} className='bg-[#121720] flex flex-col w-[130px] justify-center items-center p-4 rounded-lg shadow-lg hover:bg-[#1a2332] transition-all duration-300 transform hover:scale-110 hover:shadow-xl'>
        <img className=' w-[60px] hover:scale-110 transition-transform duration-300' src={eachSkill.skillImage} alt="" />
        <h1 className='mt-2 text-center font-medium'>{eachSkill.skillName}</h1>
      </div>)}

     


    </div>
    </div>
  )
}

export default Skills
