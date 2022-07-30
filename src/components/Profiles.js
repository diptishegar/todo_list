import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { deleteProfile } from "../actions/actions";
import CreateProfile from "./CreateProfile";

const StudProfiles = ({ profiles=[], onRemoveProf }) => {
    return(
    <div>
    <CreateProfile />
    {profiles.map(profile => <Profile profile={profile} key={profile.key} onRemoveProf={onRemoveProf}/>)}
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