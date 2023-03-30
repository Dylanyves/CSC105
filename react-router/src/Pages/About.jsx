import React from "react";
import { useNavigate } from "react-router-dom";

function About(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div>
            <h1>This is About</h1>
            <button onClick={handleClick}>Redirect</button>
        </div>
    );
}

export default About;
