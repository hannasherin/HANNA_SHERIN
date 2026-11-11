
import { motion } from 'framer-motion';
import { FaDownload } from "react-icons/fa";


function About() {
    return (
        <section className="section about" id="about">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <p className="section-subtitle">
                    GET TO KNOW ME
                </p>

                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <p className="about-text">
                    Hello! I'm Hanna Sherin, a Computer Science
                    graduate and aspiring MERN Stack Full Stack
                    Developer from Kerala, India.

                    I am passionate about building modern,
                    responsive and user-friendly web applications.
                    I enjoy working on both frontend and backend
                    development, from creating interactive user
                    interfaces to developing server-side
                    applications and REST APIs.

                    I work with technologies like React.js,
                    JavaScript, Node.js, Express.js and MongoDB.
                    I also have experience working with Redux Toolkit,
                    Git and GitHub.

                    I enjoy learning new technologies, solving
                    problems and improving my development skills.
                    I am currently looking for an opportunity as
                    a MERN Stack Developer where I can contribute,
                    learn and grow as a full-stack developer.
                </p>

                <div className="about-details">

                    <div>
                        <strong>Name:</strong> <span className="about-value">Hanna Sherin</span>
                    </div>

                    <div>
                        <strong>Education:</strong> <span className="about-value">BSc Computer Science</span>
                    </div>

                    <div>
                        <strong>Location:</strong>  <span className="about-value">Malappuram,Kerala</span>
                    </div>

                    <div>
                        <strong>Role:</strong>  <span className="about-value">MERN Stack Developer</span>
                    </div>

                    <div>
                        <strong>Frontend:</strong><span className="about-value"> React.js, JavaScript </span>
                    </div>

                    <div>
                        <strong>Backend:</strong> <span className="about-value">Node.js, Express.js </span>
                    </div>

                    <div>
                        <strong>Database:</strong>  <span className="about-value">MongoDB</span>
                    </div>

                    <div>
                        <strong>Tools:</strong>  <span className="about-value">Git, GitHub, Postman</span>
                    </div>

                </div>

                {/* Experience */}

                <div className="experience">

                    <p className="section-subtitle">
                        MY EXPERIENCE
                    </p>

                    <div className="experience-card">

                        <h3>MERN Stack Developer Internship</h3>

                        <h4>Techolas Technologies</h4>

                        <span>Calicut, Kerala | March 2026 – Present</span>

                        <p>
                            Learning and working on full-stack web
                            development using MongoDB, Express.js,
                            React.js and Node.js. Developing practical
                            projects and improving problem-solving
                            and application development skills.
                        </p>

                    </div>

                </div>

                <a
                    href="/HANNA SHERIN P.pdf"
                    download="Hanna_Sherin_Resume.pdf"
                    className="btn resume-btn"
                >
                    <FaDownload /> Download Resume
                </a>

            </motion.div>

        </section>
    );
}

export default About;
