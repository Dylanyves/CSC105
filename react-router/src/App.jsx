import { NavLink } from "react-router-dom";
import AppRouter from "./AppRouter";
import { useState } from "react";

import "./App.css";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="App">
            <AppRouter loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "350px",
                    margin: "auto",
                }}
            >
                <NavLink to="/">
                    {({ isActive }) =>
                        isActive ? (
                            <p style={{ color: "blue" }}>Home</p>
                        ) : (
                            <p style={{ color: "white" }}>Home</p>
                        )
                    }
                </NavLink>
                <NavLink to="/about">
                    {({ isActive }) =>
                        isActive ? (
                            <p style={{ color: "blue" }}>About</p>
                        ) : (
                            <p style={{ color: "white" }}>About</p>
                        )
                    }
                </NavLink>
                <NavLink to="/contact">
                    {({ isActive }) =>
                        isActive ? (
                            <p style={{ color: "blue" }}>Contact</p>
                        ) : (
                            <p style={{ color: "white" }}>Contact</p>
                        )
                    }
                </NavLink>
                <NavLink to="/profile/245">
                    {({ isActive }) =>
                        isActive ? (
                            <p style={{ color: "blue" }}>Profile</p>
                        ) : (
                            <p style={{ color: "white" }}>Profile</p>
                        )
                    }
                </NavLink>
                <NavLink to={loggedIn ? "/admin" : "login"}>
                    {({ isActive }) =>
                        isActive ? (
                            <p style={{ color: "blue" }}>Admin</p>
                        ) : (
                            <p style={{ color: "white" }}>Admin</p>
                        )
                    }
                </NavLink>
            </div>
        </div>
    );
}

export default App;
