import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/messages.css";


const Messages = () => {

    const [messages, setMessages] = useState([]);
    const [search, setSearch] = useState("");


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
    const markAsRead = async(id)=>{

    try{

        await axios.patch(
            `http://127.0.0.1:8000/api/messages/${id}/`,
            {
                is_read:true
            }
        );

        fetchMessages();

    }
    catch(err){

        console.log(err);

    }

};
const filteredMessages = messages.filter((msg)=>{

    return (
        msg.name.toLowerCase().includes(search.toLowerCase()) ||
        msg.email.toLowerCase().includes(search.toLowerCase()) ||
        msg.subject.toLowerCase().includes(search.toLowerCase())
    );

});



    return (

        <div className="messages-page">


            
            <h1>📩 Messages</h1>
            <input
type="text"
className="message-search"
placeholder=" Search messages..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>


            <div className="messages-grid">


            {
                filteredMessages.map((msg)=>(


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



                       
 
{
!msg.is_read && (

<button
onClick={()=>markAsRead(msg.id)}
className="read-btn"
>
Mark as Read
</button>

)
}


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