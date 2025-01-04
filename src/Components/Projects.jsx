import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import mock1 from '../assets/assignment11.png';
import mock2 from '../assets/visanavigator.png';
import mock3 from '../assets/LinggoBingo.png';
import mock4 from '../assets/gugedt.png';
// import mock5 from '../assets/ebpl.png';

const projectData = [
  {
    id: 1,
    image: mock1,
    title: 'COZYSTAY Hotel',
    description:
      'The website you provided, titled "Cozystay," appears to be a hotel booking platform or service. It showcases features like room listings, descriptions, pricing, and possibly options to book accommodations. The layout is user-friendly, with a focus on simplicity and ease of navigation, likely making it suitable for users looking for travel accommodations.',
    link: 'https://assignment-11-118f4.web.app/',
    aos: 'flip-left',
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
    technology:'TailwindCss, JavaScript, React.js, Node.js, Firebase, MongoDB ',
    github:'https://github.com/rianhasansiam/assignment-11-client'
  },
  {
    id: 2,
    image: mock2,
    title: 'Visa Navigator',
    description:
      'The website "Visa Navigator" seems to be a platform designed to help users navigate visa application processes. It likely provides tools for users to check visa requirements, apply online, and track their applications. The interface is straightforward and appears optimized for simplicity, focusing on delivering a smooth user experience for people dealing with visa applications.',
    link: 'https://assignment-10-56bb8.web.app/',
    aos: 'flip-left',
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
     technology:'TailwindCss, JavaScript, React.js, Node.js, Firebase, MongoDB ',
     github:'https://github.com/rianhasansiam/assignment_10-client'
  },
  {
    id: 3,
    image: mock3,
    title: 'Linggo Bingo',
    description:
      ' It likely provides tools or resources to help users learn and practice Spanish words. It might include features like vocabulary lists, quizzes, games, or learning modules designed to improve language skills. The website could focus on making language learning engaging through interactive content, especially for beginners or those looking to expand their vocabulary.',
    link: 'https://lingobingo-assignment-09.surge.sh/',
    aos: 'flip-right',
    gradient: 'bg-gradient-to-r from-pink-300 to-pink-100',
     technology:'TailwindCss, JavaScript, React.js, Firebase',
     github:'https://github.com/rianhasansiam/assignment_09'
  },
  {
    id: 4,
    image: mock4,
    title: 'Gadget Haven',
    description:
      'It focuses on gadgets or electronic products. The site may feature a collection of gadget-related content, such as reviews, product details, or possibly a platform to sell or buy gadgets. It might also include visuals and information about the latest tech trends, gadgets, and devices available for purchase.',
    link: 'https://gadget-assignment_08.surge.sh/',
    aos: 'flip-left',
    gradient: 'bg-gradient-to-r from-blue-500 to-green-500',
     technology:'TailwindCss, JavaScript, React.js, Firebase',
     github:'https://github.com/rianhasansiam/assignment_08'
  },
  // {
  //   id: 5,
  //   image: mock5,
  //   title: 'BPL Cricket',
  //   description:
  //     'A sports platform where users can buy and sell players. Built for cricket enthusiasts.',
  //   link: 'https://bpl-xl_assignment_07.surge.sh/',
  //   aos: 'flip-right',
  //   gradient: 'bg-gradient-to-r from-yellow-500 to-red-500',
  // },
];

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id="projects" className="text-white py-12 px-4 sm:px-8 lg:px-52 overflow-hidden">
      <h1 className="text-3xl font-bold mb-8">Personal Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <div
            key={project.id}
            data-aos={project.aos}
            className={`relative ${project.gradient} p-5 md:p-7 lg:p-14 rounded-lg`}
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} className="rounded-lg shadow-lg mb-4" alt={project.title} />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            </a>
            <p className="text-gray-200 text-sm">{project.description}</p>

            <div className="text-black bg-white text-center p-3 shadow-md rounded-xl my-4 py-6">
              <p className='font-semibold'>Technology</p>

            <p >{project.technology}</p>
            </div>

            <div
              className='font-semibold'>Link: <a target="_blank" href={project.github} className='underline font-normal ml-2'>GitHub </a>  <a target="_blank" href={project.link} className='underline font-normal ml-2'> Live</a>
              
               </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
