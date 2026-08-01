import "./skills.css";
import { motion } from "framer-motion";
import { SKILLS } from "../../constants/data";

const Skills = () => {

  return (

    <section className="skills" id="skills">

      <div className="skills-glow"></div>

      <motion.div

        className="skills-header"

        initial={{opacity:0,y:60}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:.8}}

        viewport={{once:true}}

      >

        <span>TECH STACK</span>

        <h2>
          Technologies I Use
          <br />
          Every Day.
        </h2>

        <p>
          A collection of technologies that I use
          to build scalable, modern and premium
          web applications.
        </p>

      </motion.div>



      <div className="skills-grid">

        {SKILLS.map((skill,index)=>(

         <motion.div

    className="skill-card"

    key={skill.name}

    initial={{
      opacity:0,
      y:40
    }}

    whileInView={{
      opacity:1,
      y:0
    }}

    whileHover={{
      y:-5,
      scale:1.02
    }}

    transition={{
      delay:index*.08,
      duration:.35
    }}

    viewport={{
      once:true
    }}

>

            <motion.div

    className="skill-icon"

    whileHover={{
        rotate:12,
        scale:1.15
    }}

    transition={{
        duration:.3
    }}

>

    {skill.icon}

</motion.div>

            <h3>
              {skill.name}
            </h3>

            <p className="purpose">
              {skill.purpose}
            </p>

            <div className="progress">

              <motion.div

                className="progress-fill"

                initial={{
                  width:0
                }}

                whileInView={{
                  width:`${skill.level}%`
                }}

                transition={{
                  duration:1
                }}

                viewport={{
                  once:true
                }}

              />

            </div>

            <span className="percent">
              {skill.level}%
            </span>

          </motion.div>

        ))}

      </div>

    </section>

  );

};

export default Skills;