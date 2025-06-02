import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AContact = () => {
  const form = useRef();
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease-in-out-cubic',
    });
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    
    const templateParams = {
      from_name: formData.get('from_name'),
      user_email: formData.get('user_email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      visit_time: new Date().toLocaleString()
    };

    const attemptSend = (retryCount = 0) => {
      emailjs
        .send('service_yrlxuma', 'template_0217uod', templateParams, {
          publicKey: 'TLs9u-trXhMYUsnMT',
        })
        .then(
          () => {
            toast.success("Message Sent Successfully!", {
              position: "top-center",
              autoClose: 3000
            });
            form.current.reset();
          },
          (error) => {
            console.log("Failed to send message:", error);
            
            if (retryCount < 2) {
              setTimeout(() => {
                attemptSend(retryCount + 1);
              }, 2000 * (retryCount + 1));
            } else {
              toast.error("Message couldn't be sent after multiple attempts. Please try again later.", {
                position: "top-center",
                autoClose: 5000
              });
            }
          }
        );
    };

    attemptSend();
  };  return (
    <div id='contact' className="flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      <form data-aos="zoom-in-up" data-aos-duration="1500" ref={form} onSubmit={sendEmail} className="bg-white shadow-lg text-black rounded-lg p-8 w-[95%] md:w-[80%] lg:w-[50%] hover:shadow-2xl transition-shadow duration-500">
        <h2 data-aos="fade-down" data-aos-delay="200" className="text-5xl font-bold text-gray-800 mb-6 text-center hover:text-purple-600 transition-colors duration-300">Contact Us</h2>        <div data-aos="fade-right" data-aos-delay="400" className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-300"
            required
          />
        </div>

        <div data-aos="fade-left" data-aos-delay="500" className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-300"
            required
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="600" className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-300"
            required
          />
        </div>        <div data-aos="fade-left" data-aos-delay="700" className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-300 resize-none"
            rows="4"
            required
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="800" className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-500 text-white font-bold py-2 px-6 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default AContact;