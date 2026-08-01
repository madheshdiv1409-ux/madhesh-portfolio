import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import "./Hero.css";


const Hero = () => {


  const title = "MADHESH WARAN H";


  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  const rotateX = useSpring(mouseY,{
    stiffness:100,
    damping:20
  });


  const rotateY = useSpring(mouseX,{
    stiffness:100,
    damping:20
  });



  useEffect(()=>{


    const handleMouseMove = (e)=>{


      const x =
      (e.clientX / window.innerWidth - 0.5) * 15;


      const y =
      (e.clientY / window.innerHeight - 0.5) * 15;


      mouseX.set(x);
      mouseY.set(-y);


    };


    window.addEventListener(
      "mousemove",
      handleMouseMove
    );


    return ()=>{

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

    };


  },[]);



  return (

    <section
    className="hero"
    id="home"
>


      <div className="hero-grid"></div>



      <div className="hero-container">



        {/* LEFT CONTENT */}

        <div className="hero-text">



          <motion.span

            className="hero-top"

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:.8
            }}

          >

            SOFTWARE ENGINEER • FULL STACK DEVELOPER

          </motion.span>





          <h1>

            {
              title.split("").map((letter,index)=>(


                <motion.span

                  key={index}

                  initial={{
                    opacity:0,
                    y:60
                  }}

                  animate={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    delay:index*0.05,
                    duration:.5
                  }}

                >

                  {letter}

                </motion.span>


              ))
            }

          </h1>






          <motion.h2

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:1
            }}

          >

            Creating Digital Experiences That Matter

          </motion.h2>






          <motion.p

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:1.2
            }}

          >

            I design and develop modern web applications
            with clean architecture, smooth interactions and
            scalable solutions using React, Django and modern technologies.

          </motion.p>






          <motion.div

            className="hero-buttons"

            initial={{
              opacity:0,
              y:30
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:1.5
            }}

          >


         <a
    href="#projects"
    className="primary"
>
    View Projects →
</a>


         <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary"
>
    View Resume ↓
</a>

          </motion.div>



        </div>







        {/* RIGHT IMAGE */}


        <motion.div

          className="hero-visual"


          initial={{
            opacity:0,
            x:50
          }}


          animate={{
            opacity:1,
            x:0
          }}


          transition={{
            delay:1,
            duration:1
          }}


          style={{
            rotateX,
            rotateY
          }}

        >

<motion.div className="hero-visual">

    <img
        src="/images/profile.png"
        className="profile-image"
        alt="Madhesh"
    />

</motion.div>
</motion.div>



      </div>





      {/* CENTER SCROLL */}

      <motion.div

        className="scroll-indicator"

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        transition={{
          delay:2
        }}

      >

        <span></span>

        SCROLL


      </motion.div>




    </section>


  );

};



export default Hero;