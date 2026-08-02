import "./../styles/messages.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Messages = () => {

  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMessages = () => {
    axios
      .get("http://127.0.0.1:8000/api/messages/")
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {

    await axios.delete(`http://127.0.0.1:8000/api/messages/${id}/`);

    fetchMessages();

  };

  return (

<div className="messages-page">

<div className="messages-header">

<h1>📬 Inbox</h1>

<input
className="search-box"
placeholder="Search..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

<div className="message-list">

{messages
.filter((msg)=>

msg.name.toLowerCase().includes(search.toLowerCase()) ||

msg.email.toLowerCase().includes(search.toLowerCase()) ||

msg.subject.toLowerCase().includes(search.toLowerCase())

)

.map((msg)=>(

<div className="message-card" key={msg.id}>

<div className="message-top">

<div>

<div className="message-name">{msg.name}</div>

<div className="message-email">{msg.email}</div>

</div>

</div>

<div className="message-subject">

📌 {msg.subject}

</div>

<div className="message-body">

💬 {msg.message}

</div>

<button
className="delete-btn"
onClick={()=>deleteMessage(msg.id)}
>

Delete

</button>

</div>

))}

</div>

</div>

  );

};

export default Messages;