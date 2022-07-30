import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { deleteProfile } from "../actions/actions";
import CreateProfile from "./CreateProfile";

const StudProfiles = ({ profiles=[], onRemoveProf }) => {
    var i=0;
    return(
    <div>
    <CreateProfile />
    {   
        profiles.map(profile =>
        <Profile profile={profile} i={(i++)+1} key={profile.key} onRemoveProf={onRemoveProf}/>
        )}
    </div>
    );
    };

    const mapStateToProps = state => ({
        profiles: state.profiles,
    });
    const mapDispatchToProps = dispatch => ({
        onRemoveProf: text => dispatch(deleteProfile(text)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(StudProfiles);