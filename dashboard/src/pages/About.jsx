import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/about.css";


const About = () => {

    const [about, setAbout] = useState(null);


    useEffect(() => {

        axios
        .get("http://127.0.0.1:8000/api/about/")
        .then((res)=>{

            if(res.data.length > 0){
                setAbout(res.data[0]);
            }

        })
        .catch((err)=>console.log(err));


    },[]);



    return (

        <div className="about-page">


            <h1>👤 About Me</h1>


            {
                about ? (

                <div className="about-card">

                    <h2>{about.name}</h2>

                    <h3>{about.role}</h3>


                    <p>
                        {about.description}
                    </p>


                </div>


                ) : (

                <h2>No About Data Found</h2>

                )
            }



        </div>

    );

};


export default About;