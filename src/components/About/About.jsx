import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

      {/* Background Glow */}
      <div className="about-glow"></div>

      <div className="about-container">

        {/* ================= HEADER ================= */}

        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="about-tag">
            ABOUT ME
          </span>

          <h2>
            Building Products,
            <br />
            Not Just Websites.
          </h2>

          <p>
            I'm <strong>Madhesh</strong>, a B.Sc Computer Science student at
            <strong> SRM Ramapuram</strong> and currently working as a
            <strong> Full Stack Developer Intern</strong>.

            <br /><br />

            I enjoy designing clean user interfaces,
            developing scalable backend systems and
            building modern web applications using
            React, Django and modern technologies.

            <br /><br />

            My goal is to become a Software Engineer
            who creates products that people genuinely
            enjoy using.
          </p>

        </motion.div>

        {/* ================= TIMELINE ================= */}

        <motion.div
          className="timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <h3>MY JOURNEY</h3>

          <div className="timeline-row">

            <div className="timeline-card">
              <span>2024</span>
              <h4>Started Programming</h4>
              <p>Learned programming fundamentals.</p>
            </div>

            <div className="timeline-card">
              <span>2025</span>
              <h4>Frontend Development</h4>
              <p>Built websites using HTML, CSS, JS & React.</p>
            </div>

            <div className="timeline-card">
              <span>2026</span>
              <h4>Full Stack Internship</h4>
              <p>Working with Python Django & React.</p>
            </div>

            <div className="timeline-card">
              <span>2027</span>
              <h4>Future Goal</h4>
              <p>Graduate & become a Software Engineer.</p>
            </div>

          </div>

        </motion.div>

        {/* ================= INFO CARDS ================= */}

        <div className="about-grid">

          <div className="about-card large">
            <h3>🎓 Education</h3>
            <p>B.Sc Computer Science</p>
            <span>SRM Ramapuram</span>
          </div>

          <div className="about-card">
            <h3>💼 Internship</h3>
            <p>Full Stack Developer</p>
            <span>Python • Django</span>
          </div>

          <div className="about-card">
            <h3>⚛ Tech Stack</h3>
            <p>React • Django</p>
            <span>Modern Web Development</span>
          </div>

          <div className="about-card full">
            <h3>🎯 Career Goal</h3>
            <p>Software Engineer</p>
            <span>Building products that create impact.</span>
          </div>

        </div>

        {/* ================= STATS ================= */}

        <div className="about-stats">

          <div className="stat">
            <h2>03+</h2>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h2>10+</h2>
            <p>Technologies</p>
          </div>

          <div className="stat">
            <h2>2027</h2>
            <p>Graduation</p>
          </div>

          <div className="stat">
            <h2>∞</h2>
            <p>Learning</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;