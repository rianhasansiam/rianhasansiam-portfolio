import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import mock1 from '../assets/visanavigator.png';
import mock2 from '../assets/LinggoBingo.png';
import mock3 from '../assets/gugedt.png';
import mock4 from '../assets/ebpl.png';

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id='projects' className=" text-white py-12 px-4 sm:px-8 lg:px-52 overflow-hidden">
      <h1 className="text-3xl font-bold mb-8">Personal Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div data-aos="flip-left" className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-5  md:p-7 lg:p-14 rounded-lg">
          <a
            href="https://assignment-10-56bb8.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mock1}
              className="rounded-lg shadow-lg mb-4"
              alt="Visa Navigator"
              width="100%"
            />
          </a>
          <a
            href="https://assignment-10-56bb8.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-2xl font-bold mb-2">Visa Navigator</h2>
          </a>
          <p className="text-gray-200">
            Developed Visa Application app with semantic search and sentiment
            analysis using ReactJs, ExpressJs.
          </p>
        </div>

        {/* Project 2 */}
        <div data-aos="flip-right" className="relative bg-gradient-to-r from-pink-300 to-pink-100 p-5  md:p-7 lg:p-14 rounded-lg">
          <a
            href="https://lingobingo-assignment-09.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mock2}
              className="rounded-lg shadow-lg mb-4"
              alt="Linggo Bingo"
              width="100%"
            />
          </a>
          <a
            href="https://lingobingo-assignment-09.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-2xl font-bold mb-2">Linggo Bingo</h2>
          </a>
          <p className="text-gray-200">
            An online educational platform that provides high-quality data
            science resources in Spanish. Built using ReactJs.
          </p>
        </div>

        {/* Project 3 */}
        <div data-aos="flip-left" className="relative bg-gradient-to-r from-blue-500 to-green-500 p-5  md:p-7 lg:p-14 rounded-lg">
          <a
            href="https://gadget-assignment_08.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mock3}
              className="rounded-lg shadow-lg mb-4"
              alt="Gadget Haven"
              width="100%"
            />
          </a>
          <a
            href="https://gadget-assignment_08.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-2xl font-bold mb-2">Gadget Haven</h2>
          </a>
          <p className="text-gray-200">
            This app is about the latest gadget shop, allowing stores to use it
            for selling gadgets.
          </p>
        </div>

        {/* Project 4 */}
        <div data-aos="flip-right" className="relative bg-gradient-to-r from-yellow-500 to-red-500 p-5  md:p-7 lg:p-14 rounded-lg">
          <a
            href="https://bpl-xl_assignment_07.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mock4}
              className="rounded-lg shadow-lg mb-4"
              alt="BPL Cricket"
              width="100%"
            />
          </a>
          <a
            href="https://bpl-xl_assignment_07.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-2xl font-bold mb-2">BPL Cricket</h2>
          </a>
          <p className="text-gray-200">
            A sports platform where users can buy and sell players. Built for
            cricket enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
