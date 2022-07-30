import React, { useState } from "react";
import { connect } from "react-redux";
import { createProfile } from "../actions/actions";
import "../createprofile.css";

const CreateProfile = ( {profiles, onCreateProf }) => {
    const [studName, setStudName] = useState('');
    return (
        <div>
    <div className="container-fluid add_div d-flex flex-row">
    
        <input 
        value={studName}
        className="name form-control input_div" 
        onChange={e=>setStudName(e.target.value)}
        placeholder="Enter a task" 
        type="text" />
        <button 
        onClick={() => {
            const isDuplicate = profiles.some(prof => prof.text === studName);
            if(!isDuplicate){
                onCreateProf(studName);
                setStudName('');
            }
        }}
        className="submit-btn btn btn-primary px-6" 
        type="submit">Create</button>
    </div>
    </div>
    );
    };

const mapStateToProps = state => ({
    profiles: state.profiles,
});
const mapDispatchToProps = dispatch => ({
    onCreateProf: text => dispatch(createProfile(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);