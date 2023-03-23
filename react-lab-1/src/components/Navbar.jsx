import React from "react";

function Navbar(props) {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-purple-700">Tasks</h1>
            <nav>
                <li className="my-[30px] text-xl list-none py-[15px] px-[80px] rounded-[20px] bg-blue-100 text-center">
                    Incoming
                </li>
                <li className="my-[30px] text-xl list-none py-[15px] px-[80px] rounded-[20px] bg-blue-100 text-center">
                    Today
                </li>
                <li className="my-[30px] text-xl list-none py-[15px] px-[80px] rounded-[20px] bg-blue-100 text-center">
                    Calendar
                </li>
            </nav>
        </div>
    );
}

export default Navbar;
