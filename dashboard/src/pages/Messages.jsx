import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/messages.css";


const Messages = () => {

    const [messages, setMessages] = useState([]);


    const fetchMessages = () => {

        axios
        .get("http://127.0.0.1:8000/api/messages/")
        .then((res)=>{

            setMessages(res.data);

        })
        .catch((err)=>console.log(err));

    };


    useEffect(()=>{

        fetchMessages();

    },[]);



    const deleteMessage = async(id)=>{

        const confirmDelete = window.confirm(
            "Delete this message?"
        );


        if(confirmDelete){

            await axios.delete(
                `http://127.0.0.1:8000/api/messages/${id}/`
            );


            fetchMessages();

        }

    };



    return (

        <div className="messages-page">


            <h1>📩 Messages</h1>


            <div className="messages-grid">


            {
                messages.map((msg)=>(


                    <div 
                    className="message-card"
                    key={msg.id}
                    >


                        <div className="message-header">

                            <h3>
                                👤 {msg.name}
                            </h3>


                            {
                                msg.is_read ?

                                <span className="read">
                                    Read
                                </span>

                                :

                                <span className="unread">
                                    New
                                </span>

                            }


                        </div>



                        <p>
                            📧 {msg.email}
                        </p>


                        <h4>
                            {msg.subject}
                        </h4>


                        <p>
                            {msg.message}
                        </p>



                        <button
                        onClick={()=>deleteMessage(msg.id)}
                        >
                            Delete
                        </button>


                    </div>


                ))
            }


            </div>


        </div>

    );

};


export default Messages;