import { useEffect, useState } from "react";

const Background = () => {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {

        const move = (e) => {

            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;

            setPosition({ x, y });

        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);

    }, []);

    return (

        <div
            className="background-light"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
        />

    );

};

export default Background;