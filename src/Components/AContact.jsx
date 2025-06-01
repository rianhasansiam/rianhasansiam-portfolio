import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const AContact = ({ userLocation }) => {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const requestLocationManually = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by this browser", {
        position: "top-right",
        autoClose: 5000
      });
      return;
    }

    toast.info("Requesting lcc access...", {
      position: "top-center",
      autoClose: 2000
    });

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Manual lc request successful:", position.coords);
        toast.success("lc access granted! Please refresh the page.", {
          position: "top-center",
          autoClose: 4000
        });
      },
      (error) => {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            toast.error("lc access denied. Please enable location in browser settings.", {
              position: "top-center",
              autoClose: 6000
            });
            break;
          case error.POSITION_UNAVAILABLE:
            toast.error("lc information is unavailable.", {
              position: "top-center",
              autoClose: 4000
            });
            break;
          case error.TIMEOUT:
            toast.error("lc request timed out.", {
              position: "top-center",
              autoClose: 4000
            });
            break;
          default:
            toast.error("An unknown error occurred.", {
              position: "top-center",
              autoClose: 4000
            });
            break;
        }
      },
      options
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    
    const googleMapsLink = userLocation && userLocation.latitude && userLocation.longitude 
      ? `https://www.google.com/maps?q=${userLocation.latitude},${userLocation.longitude}`
      : 'Location not available';
    
    const templateParams = {
      from_name: formData.get('from_name'),
      user_email: formData.get('user_email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      user_latitude: userLocation && userLocation.latitude ? userLocation.latitude : 'Not available',
      user_longitude: userLocation && userLocation.longitude ? userLocation.longitude : 'Not available',
      location_info: userLocation && userLocation.latitude && userLocation.longitude ? 
        `User Location - Latitude: ${userLocation.latitude}, Longitude: ${userLocation.longitude}, Accuracy: ${userLocation.accuracy || 'Unknown'}m` : 
        'Location not available',
      google_maps_link: googleMapsLink,
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
  };

  return (
    <div id='contact' className="flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      <form data-aos="zoom-in-up" ref={form} onSubmit={sendEmail} className="bg-white shadow-lg text-black rounded-lg p-8 w-[95%] md:w-[80%] lg:w-[50%]">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

        <div className="mb-4 p-3 rounded-md border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Location Status:</span>
            {userLocation && userLocation.latitude && userLocation.longitude ? (
              <span className="text-green-600 text-sm flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Captured (±{userLocation.accuracy ? Math.round(userLocation.accuracy) : 'Unknown'}m)
              </span>
            ) : userLocation && userLocation.error ? (
              <span className="text-red-600 text-sm flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {userLocation.error}
              </span>
            ) : (
              <span className="text-yellow-600 text-sm flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Detecting...
              </span>
            )}
          </div>
          {(!userLocation || (!userLocation.latitude && !userLocation.longitude)) && (
            <button 
              type="button"
              onClick={requestLocationManually}
              className="mt-2 text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
            >
              Enable Location Access
            </button>
          )}
        </div>

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

AContact.propTypes = {
  userLocation: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    accuracy: PropTypes.number,
    timestamp: PropTypes.string,
    error: PropTypes.string
  })
};

export default AContact;