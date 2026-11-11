
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';



function Contact() {
  return (
    <section className="section contact" id="contact">

      <p className="section-subtitle">LET'S CONNECT</p>

      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <p className="contact-text">
        Looking for a passionate developer?
        Let's connect and create something amazing together!
      </p>

      <div className="contact-items">

        <a href="mailto:hannasherinpp2000@gmail.com">
          <FaEnvelope /> hannasherinpp2000@gmail.com
        </a>

        <a
          href="https://github.com/hannasherin"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://linkedin.com/in/hannasherin2000"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

         <a
          href="https://wa.me/919447746641"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
          aria-label="Contact me on WhatsApp"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a> 

         <a
          href="https://www.instagram.com/_hanna_bashi/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
          aria-label="Follow me on Instagram"
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>

      </div>

    </section>
  );
}

export default Contact;
