export const CREATE_PROFILE = 'CREATE_PROFILE';
export const createProfile = (text, descrip, difficulty) => ({
    type: CREATE_PROFILE,
    payload: {text, descrip, difficulty},
});

export const DELETE_PROFILE = 'DELETE_PROFILE';
export const deleteProfile = text => ({
    type: DELETE_PROFILE,
    payload: {text},
});

