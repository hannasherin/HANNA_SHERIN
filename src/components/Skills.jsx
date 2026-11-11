
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Redux Toolkit', icon: <SiRedux /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Git', icon: <FaGitAlt /> }
];

function Skills() {
  return (
    <section className="section skills" id="skills">

      <p className="section-subtitle">WHAT I KNOW</p>

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
