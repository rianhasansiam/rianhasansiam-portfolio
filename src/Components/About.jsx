import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dp from '../assets/rianface.jpg' 

const About = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          easing: 'ease-in-out',
          once: false, // Repeat animation when scrolling up/down
        });
      }, []);



  return (
    <div id="about" className="py-12 px-6 sm:px-8 lg:px-24  text-white">
      <h1 className="text-4xl font-bold mb-6 text-center" data-aos="fade-up">About Me</h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12" data-aos="zoom-in">
        <img
          src={dp}
          alt="Your Name"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-lg"
        />
        <div className="max-w-lg text-center md:text-left">
          <p className="text-lg font-light mb-4">
            Hi, I'm <span className="font-bold">Rian Hasan Siam</span>, a passionate Software Engineering student at Daffodil International University.
          </p>
          <p className="text-lg font-light">I love creating and building efficient software solutions, especially in web development.</p>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg" data-aos="flip-left">
          <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
          <ul className="list-disc list-inside">
            <li>Training any kind of sports</li>
            <li>Exploring tech communities</li>
            <li>Practicing Football</li>
          </ul>
        </div>

        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg" data-aos="flip-right">
          <h2 className="text-2xl font-bold mb-4">Free Time Activities</h2>
          <ul className="list-disc list-inside">
            <li>Watching tech reviews and tutorials</li>
            <li>Watching Football Match</li>
            <li>Playing Football</li>
          </ul>
        </div>
      </div>

      {/* Future Goals Section */}
      <div className="bg-gradient-to-r from-green-400 to-yellow-400 p-8 rounded-lg text-gray-900 shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-center">My Future Goals</h2>
        <p className="text-lg">
          I aspire to become a full-stack software engineer, creating innovative solutions to solve real-world problems.
        </p>
      </div>

      {/* Personality Section */}
      <div className="text-center mt-12" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-4">What Defines Me</h2>
        <p className="text-xl">
          Driven, curious, and always up for a challenge. I constantly strive to improve in both personal and professional capacities.
        </p>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About