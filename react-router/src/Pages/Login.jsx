import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ loggedIn, setLoggedIn }) {
    const navigate = useNavigate();
    const handleClick = () => {
        setLoggedIn(true);
        navigate("/admin");
    };

    return (
        <div>
            <h1>Login!</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default Login;
