
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaArrowRight
} from 'react-icons/fa';

import profile from '../assets/profile.jpg';

function Home() {
    return (
        <section className="home section" id="home">

            {/* Home Content */}

            <motion.div
                className="home-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >

                <p className="intro">
                    HELLO, I'M
                </p>

                <h1>
                    HANNA <span>SHERIN</span>
                </h1>

                <h2>
                    MERN Stack Full Stack Developer
                </h2>

                <p className="home-description">
                    I am a passionate MERN Stack Developer
                    and Computer Science graduate who enjoys
                    building modern, responsive and user-friendly
                    web applications.

                    I work with React.js, Node.js, Express.js
                    and MongoDB to develop full-stack
                    applications, create REST APIs and
                    build interactive user experiences.

                    I am eager to learn new technologies,
                    solve real-world problems and grow
                    as a full-stack developer.
                </p>

                {/* Buttons */}

                <div className="home-buttons">

                    <a
                        href="#projects"
                        className="primary-btn"
                    >
                        View My Work
                        <FaArrowRight />
                    </a>

                    <a
                        href="#contact"
                        className="secondary-btn"
                    >
                        Contact Me
                    </a>

                     <a
                        href="/HANNA SHERIN P.pdf"
                        download="Hanna_Sherin_Resume.pdf"
                        className="btn resume-btn"
                    >
                        <FaDownload /> Download Resume
                    </a>

                </div>

                {/* Social Media */}

                <div className="social-links">

                    <a
                        href="https://github.com/hannasherin"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/hannasherin2000"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://www.instagram.com/_hanna_bashi/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://wa.me/919447746641"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with me on WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>

                   

                </div>

            </motion.div>

            {/* Profile Image */}

            <motion.div
                className="home-image"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >

                <div className="image-border">

                    <img
                        src={profile}
                        alt="Hanna Basheer - MERN Stack Developer"
                    />

                </div>

            </motion.div>

        </section>
    );
}

export default Home;
