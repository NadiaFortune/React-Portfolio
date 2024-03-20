import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.jsx'
import HeaderSection from './Pages/Home/Header.jsx'
// import AboutMe from './Pages/Home/AboutMe.jsx'
// import Contact from './Pages/Home/Contact.jsx'
// import Footer from './Pages/Home/Footer.jsx'
// import MySkills from './Pages/Home/MySkills.jsx'
// import ProjectGallery from './Pages/Home/ProjectGallery.jsx'
// import Testimonials from './Pages/Home/Testimonials.jsx'



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default function Home() {
  return (
    <>
      <HeaderSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer /> */
    </>
  );
}