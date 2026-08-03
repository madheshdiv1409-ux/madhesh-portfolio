import "./../styles/topbar.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Topbar = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {

    axios
      .get("https://madhesh-portfolio-backend.onrender.com")
      .then((res) => setCount(res.data.length))
      .catch((err) => console.log(err));

  }, []);

  return (

    <div className="topbar">

      <div className="topbar-left">
        <h2>Portfolio Dashboard</h2>
      </div>

      <div className="topbar-right">

        <div className="notification">
          🔔
          <span>{count}</span>
        </div>

        <img
          src="https://ui-avatars.com/api/?name=Madhesh&background=2563EB&color=fff"
          alt="profile"
        />

      </div>

    </div>

  );

};

export default Topbar;