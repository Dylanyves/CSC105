import React from "react";
import { useParams } from "react-router-dom";

function Profile(props) {
    const { id } = useParams();

    return (
        <div>
            <h1>This is Profile Page</h1>
            <p>
                Student id: <strong>{id}</strong>
            </p>
        </div>
    );
}

export default Profile;
