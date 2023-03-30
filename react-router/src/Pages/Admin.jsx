import React from "react";
import { useNavigate } from "react-router-dom";

function Admin({ loggedIn, setLoggedIn }) {
    const navigate = useNavigate();

    const handleClick = () => {
        setLoggedIn(false);
        navigate("/");
    };

    return (
        <div>
            <img src="../public/vite.svg" alt="" />
            <h1>This is Admin Page</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}

export default Admin;
