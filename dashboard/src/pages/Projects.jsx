import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/projects.css";


const Projects = () => {

    const [projects, setProjects] = useState([]);


    useEffect(()=>{

        axios
        .get("http://127.0.0.1:8000/api/projects/")
        .then((res)=>{

            setProjects(res.data);

        })
        .catch((err)=>console.log(err));


    },[]);



    return (

        <div className="projects-page">


            <h1>🚀 Projects</h1>


            <div className="projects-grid">


            {
                projects.map((project)=>(


                    <div 
                    className="project-card"
                    key={project.id}
                    >


                        <div className="project-image">

                            {
                                project.image ?

                                <img
                                src={`http://127.0.0.1:8000${project.image}`}
                                alt={project.title}
                                />

                                :

                                <div className="no-image">
                                    🚀
                                </div>

                            }

                        </div>



                        <h2>
                            {project.title}
                        </h2>


                        <p>
                            {project.description}
                        </p>


                        <span>
                            {project.tech_stack}
                        </span>



                        <div className="project-links">


                            <a
                            href={project.github_link}
                            target="_blank"
                            >
                                Github
                            </a>


                            <a
                            href={project.live_link}
                            target="_blank"
                            >
                                Live
                            </a>


                        </div>



                    </div>


                ))
            }


            </div>


        </div>

    );

};


export default Projects;