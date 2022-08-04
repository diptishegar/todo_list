import React from "react";
import "../createprofile.css";

const Profile = ({ profile, i, onRemoveProf })=>{
    return (
    <div key={profile.text} className="p-4 card text-dark d-flex flex-row justify-content-between mt-3 card-indi-profile">
    
    <p className="card-text p-2 text-dark">
    <span className="num_todos">{
        i
    }</span>
    {profile.text}</p>
    <p>{profile.difficulty}</p>
    {profile.descrip} 
    <a href="#"
    style={{
        "width":"8rem",
        "height":"4rem"
    }}
    onClick={()=>onRemoveProf(profile.text)} className="btn btn-outline-danger pt-3">Delete</a>
   
    </div>
    );
};

export default Profile;