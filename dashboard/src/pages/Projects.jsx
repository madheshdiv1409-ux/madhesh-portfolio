import { useEffect, useState } from "react";
import api from "../api/api";
import "../styles/projects.css";


const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [showModal, setShowModal] = useState(false);

const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech_stack: "",
    github_link: "",
    live_link: "",
    image: null,
});
const [editingId, setEditingId] = useState(null);

const fetchProjects = () => {
    api.get("projects/")
        .then((res) => {
            setProjects(res.data);
        })
        .catch((err) => console.log(err));
};
const handleSubmit = async () => {

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("tech_stack", formData.tech_stack);
    data.append("github_link", formData.github_link);
    data.append("live_link", formData.live_link);

    if(formData.image){
        data.append("image", formData.image);
    }

    try{

    if(editingId){

        await api.put(`projects/${editingId}/`, data,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });

        alert("Project Updated Successfully");

    }

    else{

        await api.post("projects/", data,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });

        alert("Project Added Successfully");

    }

    fetchProjects();

    setShowModal(false);

    setEditingId(null);

    setFormData({
        title:"",
        description:"",
        tech_stack:"",
        github_link:"",
        live_link:"",
        image:null
    });

}

    catch(err){

        console.log(err);
        alert("Error");

    }

};
const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {

        await api.delete(`projects/${id}/`);

        fetchProjects();

        alert("Project Deleted Successfully");

    } catch (err) {

        console.log(err);
        alert("Delete Failed");

    }

};
const handleEdit = (project) => {

    setEditingId(project.id);

    setFormData({
        title: project.title,
        description: project.description,
        tech_stack: project.tech_stack,
        github_link: project.github_link,
        live_link: project.live_link,
        image: null,
    });

    setShowModal(true);

};
   useEffect(() => {
    fetchProjects();
}, []);


    return (

        <div className="projects-page">


            
            <div className="projects-header">
    <button
    className="add-project-btn"
    onClick={() => setShowModal(true)}
>
    + Add Project
</button>
</div>


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
                                src={project.image}
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
<div className="project-actions">

    <button
        className="edit-btn"
        onClick={() => handleEdit(project)}
    >
        Edit
    </button>

    <button
        className="delete-btn"
        onClick={() => handleDelete(project.id)}
    >
        Delete
    </button>

</div>

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
        {
showModal && (

<div className="modal-overlay">

    <div className="modal">

        <h2>
    {editingId ? "Edit Project" : "Add Project"}
</h2>

        <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e)=>
                setFormData({...formData,title:e.target.value})
            }
        />

        <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e)=>
                setFormData({...formData,description:e.target.value})
            }
        />

        <input
            type="text"
            placeholder="Tech Stack"
            value={formData.tech_stack}
            onChange={(e)=>
                setFormData({...formData,tech_stack:e.target.value})
            }
        />

        <input
            type="text"
            placeholder="Github Link"
            value={formData.github_link}
            onChange={(e)=>
                setFormData({...formData,github_link:e.target.value})
            }
        />

        <input
            type="text"
            placeholder="Live Link"
            value={formData.live_link}
            onChange={(e)=>
                setFormData({...formData,live_link:e.target.value})
            }
        />

        <input
            type="file"
            onChange={(e)=>
                setFormData({...formData,image:e.target.files[0]})
            }
        />

        <div className="modal-buttons">

            <button
                onClick={()=>setShowModal(false)}
            >
                Cancel
            </button>

     <button onClick={handleSubmit}>
    {editingId ? "Update" : "Save"}
</button>
        </div>

    </div>

</div>

)
}


        </div>

    );

};


export default Projects;