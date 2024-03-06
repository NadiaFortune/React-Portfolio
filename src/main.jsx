import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Pages/Home/Header.jsx'
import './Pages/Home/AboutMe.jsx'
import './Pages/Home/Contact.jsx'
import './Pages/Home/Footer.jsx'
import './Pages/Home/MySkills.jsx'
import './Pages/Home/NavBar.jsx'
import './Pages/Home/ProjectGallery.jsx'
import './Pages/Home/Testimonials.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

