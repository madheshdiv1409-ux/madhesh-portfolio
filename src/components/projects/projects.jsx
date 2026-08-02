import "./projects.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import API from "../../utils/api";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    API.get("/projects/")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (

    <section
      className="projects"
      id="projects"
    >

      {/* Header */}

      <div className="projects-header">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SELECTED WORK
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          Turning Ideas Into
          <br />
          Digital Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
        >
          A collection of projects that showcase my passion
          for creating scalable, modern and interactive
          web applications.
        </motion.p>

      </div>

      {/* Projects */}

      <div className="projects-wrapper">

        {projects.map((project, index) => (

          <motion.div

            key={project.id}

            className="project-card"

            initial={{
              opacity: 0,
              y: 80
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: .8,
              delay: index * .15
            }}

            viewport={{
              once: true
            }}

          >

            <div className="project-left">

             <span className="project-number">
  0{index + 1}
</span>

              <span className="project-subtitle">
                {project.subtitle}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="tech-stack">

                {project.tech_stack.split(", ").map((item) => (

                  <span key={item}>
                    {item}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>

                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>

              </div>

            </div>

            <div className="project-right">

 <img
  src={
    project.title === "Dhanush Universe"
      ? "/images/projects/dhanush-universe.png"
      : project.title === "Food Ordering Platform"
      ? "/images/projects/food.png"
      : "/images/projects/delivery.png"
  }
  alt={project.title}
/>
            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

};

export default Projects;