import syntechIcon from '../assets/SYNTHTECH_ICON.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="logo"><img src={syntechIcon} alt="Syntech Logo" /></li>
        <li><a href="#about">Our Story</a></li>
        <li><a href="#SynthMed">SynthMed</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;