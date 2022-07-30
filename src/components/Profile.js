import React from "react";
import "../createprofile.css";

const Profile = ({ profile, i, onRemoveProf })=>{
    return (
    <div key={profile.text} className="p-4 card text-dark d-flex flex-row justify-content-between mt-3" style={{"width": "50rem", "height":"7rem"}}>
    
    <p className="card-text p-2 text-dark">
    <span className="num_todos">{
        i
    }</span>
    {profile.text}</p>
    <a href="#" onClick={()=>onRemoveProf(profile.text)} className="btn btn-outline-danger pt-3 px-4">Delete</a>
   
    </div>
    );
};

export default Profile;