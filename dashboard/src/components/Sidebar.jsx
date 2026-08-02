import "../styles/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <h2>MADHESH</h2>

     <ul>
  <li><Link to="/">🏠 Dashboard</Link></li>
  <li><Link to="/messages">📬 Messages</Link></li>
  <li><Link to="/about">👤 About</Link></li>
  <li><Link to="/skills">💻 Skills</Link></li>
  <li><Link to="/projects">🚀 Projects</Link></li>
</ul>
    </div>
  );
};

export default Sidebar;