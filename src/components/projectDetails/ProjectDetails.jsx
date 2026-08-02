import "./projectDetails.css";

import { motion } from "framer-motion";

import { 
  useParams,
  Link
} from "react-router-dom";

import { PROJECTS } from "../../constants/data";



const ProjectDetails = () => {


const { id } = useParams();



const project = PROJECTS.find(
(item)=> item.id === Number(id)
);



if(!project){

return(

<div className="not-found">

<h1>
Project Not Found
</h1>


<Link to="/">
Go Back
</Link>


</div>

);

}



return(

<section className="project-details">


<motion.div

className="details-container"


initial={{
opacity:0,
y:50
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:.8
}}

>



<Link
to="/"
className="back-btn"
>

← Back To Portfolio

</Link>




<img

className="details-image"

src={project.image}

alt={project.title}

/>




<div className="details-content">


<span>
{project.subtitle}
</span>



<h1>
{project.title}
</h1>



<p>
{project.description}
</p>



<div className="details-tech">


{
project.tech.map((tech)=>(

<span key={tech}>
{tech}
</span>

))
}


</div>




<div className="details-buttons">


<a
href={project.live}
target="_blank"
rel="noreferrer"
>

Live Demo →

</a>



<a

href={project.github}

target="_blank"

rel="noreferrer"

>

GitHub ↗

</a>


</div>



</div>



</motion.div>


</section>


);


};


export default ProjectDetails;