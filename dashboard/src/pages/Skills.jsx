import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/skills.css";


const Skills = () => {

    const [skills,setSkills] = useState([]);
const [showModal, setShowModal] = useState(false);

const [formData, setFormData] = useState({
    name:"",
    icon:"",
    purpose:"",
    level:""
});

   const fetchSkills = () => {

    axios
    .get("https://madhesh-portfolio-backend.onrender.com")
    .then((res)=>setSkills(res.data))
    .catch((err)=>console.log(err));

};


useEffect(()=>{

    fetchSkills();

},[]);
const handleSubmit = async()=>{

    try{

        await axios.post(
            "https://madhesh-portfolio-backend.onrender.com",
            formData
        );


        fetchSkills();

        setShowModal(false);


        setFormData({
            name:"",
            icon:"",
            purpose:"",
            level:""
        });


        alert("Skill Added Successfully");


    }
    catch(err){

        console.log(err);

    }

};
const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Delete this skill?"
    );

    if(!confirmDelete) return;


    try{

        await axios.delete(
            `https://madhesh-portfolio-backend.onrender.com/api/skills/${id}/`
        );


        fetchSkills();

        alert("Skill Deleted Successfully");


    }
    catch(err){

        console.log(err);
        alert("Delete Failed");

    }

};

    return(

        <div className="skills-page">

            <h1>💻 Skills</h1>
            <div className="skills-header">

   <button
className="add-skill-btn"
onClick={()=>setShowModal(true)}
>
+ Add Skill
</button>

</div>


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
                        <button
className="delete-btn"
onClick={()=>handleDelete(skill.id)}
>
Delete
</button>


                    </div>
                


                ))
            }


            </div>
            {
showModal && (

<div className="modal-overlay">

    <div className="modal">

        <h2>Add Skill</h2>


        <input
        type="text"
        placeholder="Skill Name"
        value={formData.name}
        onChange={(e)=>
        setFormData({
            ...formData,
            name:e.target.value
        })
        }
        />


        <input
        type="text"
        placeholder="Icon"
        value={formData.icon}
        onChange={(e)=>
        setFormData({
            ...formData,
            icon:e.target.value
        })
        }
        />


        <textarea
        placeholder="Purpose"
        value={formData.purpose}
        onChange={(e)=>
        setFormData({
            ...formData,
            purpose:e.target.value
        })
        }
        />


        <input
        type="number"
        placeholder="Level"
        value={formData.level}
        onChange={(e)=>
        setFormData({
            ...formData,
            level:e.target.value
        })
        }
        />


        <div className="modal-buttons">

            <button
            onClick={()=>setShowModal(false)}
            >
            Cancel
            </button>


            <button
            onClick={handleSubmit}
            >
            
            Save
            </button>

        </div>


    </div>

</div>

)
}


        </div>


    );

};


export default Skills;