import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";

function Home(props) {
    return (
        <div className="flex flex-col items-center justify-center">
            <Profile />
            <Navbar />
        </div>
    );
}

export default Home;
