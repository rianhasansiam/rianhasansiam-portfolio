import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Address Section */}
          <div className="flex flex-col items-center md:items-start transition duration-300 transform hover:scale-105">
            <FaMapMarkerAlt className="text-3xl mb-3 text-yellow-400 animate-bounce" />
            <h4 className="font-semibold text-lg mb-2">Address</h4>
            <p className="text-center md:text-left">Mirpur 1</p>
            <p className="text-center md:text-left">Dhaka, Bangladesh</p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center md:items-start transition duration-300 transform hover:scale-105">
            <FaEnvelope className="text-3xl mb-3 text-red-400 animate-pulse" />
            <h4 className="font-semibold text-lg mb-2">Email</h4>
            <p className="text-center md:text-left">rianhasan1971@gmail.com</p>

          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center md:items-start transition duration-300 transform hover:scale-105">
            <FaPhoneAlt className="text-3xl mb-3 text-green-400 animate-bounce" />
            <h4 className="font-semibold text-lg mb-2">Phone</h4>
            <p className="text-center md:text-left">+8801932600504</p>
            
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
