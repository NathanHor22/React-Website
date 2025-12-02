import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import syntechIcon from './assets/SYNTHTECH_ICON.png'
import './App.css'
import Home from './pages/Home.jsx'
import OurStory from './pages/OurStory.jsx'
import SynthMed from './pages/SynthMed.jsx'
import Contact from './pages/Contact.jsx'

function App() {

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="logo"><img src={syntechIcon} alt="Syntech Logo" /></Link>
          <Link to="/our-story">Our Story</Link>
          <Link to="/synthMed">SynthMed</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/synthMed" element={<SynthMed />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
