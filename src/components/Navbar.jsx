
import { FaCode } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <FaCode /> Hanna Sherin<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-btn">
        Let's Talk
      </a>
    </nav>
  );
}

export default Navbar;
