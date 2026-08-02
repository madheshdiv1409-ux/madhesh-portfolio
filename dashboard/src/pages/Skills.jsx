import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/skills.css";


const Skills = () => {

    const [skills,setSkills] = useState([]);


    useEffect(()=>{

        axios
        .get("http://127.0.0.1:8000/api/skills/")
        .then((res)=>setSkills(res.data))
        .catch((err)=>console.log(err));


    },[]);



    return(

        <div className="skills-page">

            <h1>💻 Skills</h1>


            <div className="skills-grid">


            {
                skills.map((skill)=>(

                    <div 
                    className="skill-card"
                    key={skill.id}
                    >

                        <div className="skill-title">

                            <span>
                                {skill.icon}
                            </span>

                            <h2>
                                {skill.name}
                            </h2>

                        </div>


                        <p>
                            {skill.purpose}
                        </p>



                        <div className="progress-box">

                            <div 
                            className="progress-bar"
                            style={{
                                width:`${skill.level}%`
                            }}
                            >

                            </div>

                        </div>


                        <span className="percentage">

                            {skill.level}%

                        </span>


                    </div>


                ))
            }


            </div>


        </div>


    );

};


export default Skills;