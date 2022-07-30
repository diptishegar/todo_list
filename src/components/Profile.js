import React from "react";

const Profile = ({ profile, onRemoveProf })=>{
    return (
    <div key={profile.text}>
        <h1>{profile.text}</h1>
        <button
        onClick={()=>onRemoveProf(profile.text)}
        >
        Delete
        </button>
    </div>
);
};

export default Profile;