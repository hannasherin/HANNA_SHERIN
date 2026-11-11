
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'Voyara - Travel Booking',
        description:
            'A React-based travel booking application where users can explore destinations, view tour packages and manage their bookings.',
        tech: 'React.js • Redux Toolkit • CSS • JSON Server',
        github: 'https://github.com/hannasherin'
    },

    {
        title: "TikTokz – Watch E-commerce Website",
        description:
            "A responsive watch e-commerce website featuring interactive product listings, product details, shopping cart, and wishlist functionality.",
        tech: 'HTML5 • CSS3 • JavaScript • Git • GitHub',
        github: "https://github.com/hannasherin/Ticktokz",
        demo: "https://ticktokz.vercel.app"
    }

];

function Project() {
    return (
        <section className="section projects" id="projects">

            <p className="section-subtitle">MY RECENT WORK</p>

            <h2 className="section-title">
                Featured <span>Projects</span>
            </h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <div className="project-number">
                            0{index + 1}
                        </div>

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <span className="tech-stack">
                            {project.tech}
                        </span>
                        
                    <div className='project-buttons'>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                        >
                            <FaGithub /> GitHub <FaExternalLinkAlt />
                        </a>

                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn"
                        >
                            Live Demo <i className="fas fa-external-link-alt"></i>
                        </a>
                        </div>

                    </motion.div>
                ))}
            </div>

        </section>
    );
}

export default Project;
