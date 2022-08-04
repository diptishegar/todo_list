import React, { useState } from "react";
import { connect } from "react-redux";
import { createProfile } from "../actions/actions";
import "../createprofile.css";

const CreateProfile = ({ profiles, onCreateProf }) => {
  const [studName, setStudName] = useState("");
  const [description, setdescription] = useState("");
  const [difficulty, setdifficulty] = useState("");
  return (
    <div>
      <div className="container-fluid add_div d-flex flex-column">
        <input
          value={studName}
          className="name form-control input_div"
          onChange={(e) => setStudName(e.target.value)}
          placeholder="Enter a task"
          type="text"
        />
        <div class="text-info form-floating">
          <textarea
            id="describe" 
            className="description text-secondary form-control mt-4 mb-4 p5"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Add a description..."
            type="textarea"
          ></textarea>
           <label for="describe"></label>
        </div>
        <div class="input-group mb-3">
  <select onClick={(e) => setdifficulty(e.target.value)} class="form-select" id="inputGroupSelect02">
    <option selected>Difficulty level</option>
    <option value="Easy">Easy</option>
    <option value="Moderate">Moderate</option>
    <option value="Hard">Hard</option>
  </select>
</div>
        <button
          onClick={() => {
            const isDuplicate = profiles.some((prof) => prof.text === studName);
            if (!isDuplicate) {
              onCreateProf(studName, description, difficulty);
              setStudName("");
              setdescription("");
              setdifficulty("");
            }
          }}
          className="flex justify-content-center submit-btn btn btn-primary px-6 pb-4"
          type="submit"
        >
          Create
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});
const mapDispatchToProps = (dispatch) => ({
  onCreateProf: (text, descrip, difficulty) => dispatch(createProfile(text, descrip, difficulty)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
