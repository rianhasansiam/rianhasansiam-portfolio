import  { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

 const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yrlxuma', 'template_0217uod', form.current, {
        publicKey: 'TLs9u-trXhMYUsnMT',
      })
      .then(
        () => {
            toast.success("Massage Send Success..!", {
                position: "top-center"
              });
        },
        (error) => {
            toast.success(error,"Massage Can't send", {
                position: "top-center"
              });
        },
      );
  };

  return (
   

    <div id='contact' className="flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">

      <form data-aos="zoom-in-up" ref={form} onSubmit={sendEmail} className="bg-white shadow-lg text-black rounded-lg p-8  w-[95%] md:w-[80%]  lg:w-[50%] ">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
          name="from_name"
           
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
           
            name="user_email"
            
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
           
            name="phone"
           
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
      
            name="message"
         
            placeholder="Enter your message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-500 text-white font-bold py-2 px-6 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>


  );
};

export default Contact;