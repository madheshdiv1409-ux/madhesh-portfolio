import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/dashboard.css";
import Analytics from "../components/Analytics";
const Dashboard = () => {
    const [stats, setStats] = useState({
  messages: 0,
  projects: 0,
  skills: 0,
  about: 0,
});
useEffect(() => {

  const fetchData = async () => {

    try {

      const messages = await axios.get("http://127.0.0.1:8000/api/messages/");
      const projects = await axios.get("http://127.0.0.1:8000/api/projects/");
      const skills = await axios.get("http://127.0.0.1:8000/api/skills/");
      const about = await axios.get("http://127.0.0.1:8000/api/about/");

      setStats({
        messages: messages.data.length,
        projects: projects.data.length,
        skills: skills.data.length,
        about: about.data.length,
      });

    } catch (err) {
      console.log(err);
    }

  };

  fetchData();

}, []);
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="dashboard-home">
          <h1>Welcome Back, Madhesh 👋</h1>
          <p>Manage your portfolio from here.</p>

          <div className="cards">
            

            <div className="card">
              <h3>📬 Messages</h3>
              <h1>{stats.messages}</h1>
            </div>

            <div className="card">
              <h3>🚀 Projects</h3>
              <h1>{stats.projects}</h1>
            </div>

            <div className="card">
              <h3>💻 Skills</h3>
              <h1>{stats.skills}</h1>
            </div>

            <div className="card">
              <h3>👤 About</h3>
              <h1>{stats.about}</h1>
            </div>
            <Analytics stats={stats}/>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;