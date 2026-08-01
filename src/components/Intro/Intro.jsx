import { useEffect } from "react";
import "./Intro.css";

const Intro = ({ onFinish }) => {

  useEffect(() => {

    const timer = setTimeout(() => {
      onFinish();
    }, 2800);

    return () => clearTimeout(timer);

  }, [onFinish]);


  return (
    <div className="intro">

      <div className="intro-content">

        <h1>
          MADHESH WARAN H
        </h1>

        <h2>
          Crafting Digital Experiences
        </h2>

        <div className="loader">

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>

    </div>
  );
};

export default Intro;