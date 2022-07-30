import React, { useState } from "react";
import { connect } from "react-redux";
import { createProfile } from "../actions/actions";


const CreateProfile = ( {profiles, onCreateProf }) => {
    const [studName, setStudName] = useState('');
    return (
    <div>
        <input 
        value={studName}
        className="name" 
        onChange={e=>setStudName(e.target.value)}
        placeholder="Enter Name" 
        type="text" />
        <button 
        onClick={() => {
            const isDuplicate = profiles.some(prof => prof.text === studName);
            if(!isDuplicate){
                onCreateProf(studName);
                setStudName('');
            }
        }}
        className="submit-btn" 
        type="submit">Add</button>
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