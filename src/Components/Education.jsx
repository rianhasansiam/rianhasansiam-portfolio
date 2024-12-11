import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';





const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once:false
      // Animation duration in milliseconds
       // Whether animation should happen only once
    });
  }, []);
  const timelineData = [
    {
      role: 'Software Engineering',
      location: 'Savar, Dhaka',
      description: 'Daffodil International University',
      date: '2024 - Running',
    },
    {
      role: 'Full Stack Devoloper',
      location: 'Website, Programming Hero',
      description: ' Frontend and Backend Development have been completed by Programming Here.',
      date: '2020 - 2022',
    },
    {
      role: 'Higher Secondary Certificate',
      location: 'Mirpur, Dhaka',
      description: 'BCIC College',
      date: '2024 - 2024',
    },
    {
      role: 'Secondary School Certificate',
      location: 'Mirpur, Dhaka',
      description: 'BCIC Collge',
      date: '2011 - 2021',
    },
  ];

  return (
    <div id='education' className="bg-gray-900 text-white py-12 px-4 sm:px-8  lg:px-52 overflow-hidden">
      <h2 className="text-5xl font-bold mb-8">Education</h2>
      <div className="relative border-l border-gray-600">



        {timelineData.map((item, index) => (
          <div key={index} className="mb-5 ml-10 md:flex justify-between">
            <span className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full absolute -left-4 mt-3  ring-8 ring-gray-900">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v4H4a2 2 0 00-2 2v4h16v-4a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm2 8V6a2 2 0 00-4 0v4h4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>

  <div data-aos="fade-left" className='bg-white text-black md:w-[70%] lg:w-[45%] p-5  relative'>

    <span className='h-[20px] w-[30px] bg-white block absolute -left-3 top-7 rotate-45'></span>

         
              <h3 className="text-lg font-semibold">{item.role}</h3>
            <p className="text-sm text-gray-500 mb-1">{item.location}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
  </div>
              <span data-aos="fade-left" className="text-sm text-gray-300 max-sm:block max-sm:py-3">{item.date}</span>


          </div>
        ))}




      </div>
    </div>
  );
};

export default Education;
