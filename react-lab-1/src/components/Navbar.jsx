import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-purple-700">Tasks</h1>
            <nav>
                <NavLink replace to="/todo" className="text-black no-underline">
                    {({ isActive }) =>
                        isActive ? (
                            <li className="text-white my-[30px] text-xl list-none py-[15px] px-[80px] rounded-[20px] bg-violet-400 text-center">
                                Incoming
                            </li>
                        ) : (
                            <li>Incoming</li>
                        )
                    }
                </NavLink>
                <NavLink to="/today" className="text-black no-underline">
                    {({ isActive }) =>
                        isActive ? (
                            <li className="my-[30px] text-xl list-none py-[15px] px-[80px] rounded-[20px] bg-blue-100 text-center">
                                Today
                            </li>
                        ) : (
                            <li className="my-[30px] text-xl list-none py-[15px] px-[80px] rounded-[20px] bg-blue-100 text-center">
                                Today
                            </li>
                        )
                    }
                </NavLink>
                <NavLink
                    replace
                    to="/calendar"
                    className="text-black no-underline"
                >
                    {({ isActive }) =>
                        isActive ? (
                            <li className="my-[30px] text-xl list-none py-[15px] px-[80px] rounded-[20px] bg-blue-100 text-center">
                                Calendar
                            </li>
                        ) : (
                            <li className="my-[30px] text-xl list-none py-[15px] px-[80px] rounded-[20px] bg-blue-100 text-center">
                                Calendar
                            </li>
                        )
                    }
                </NavLink>
            </nav>
        </div>
    );
}

export default Navbar;
