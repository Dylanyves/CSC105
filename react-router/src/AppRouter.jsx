import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";

function AppRouter({ loggedIn, setLoggedIn }) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route
                path="/admin"
                element={
                    <Admin loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                }
            />
            <Route
                path="/login"
                element={
                    <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                }
            />
        </Routes>
    );
}

export default AppRouter;
