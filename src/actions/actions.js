export const CREATE_PROFILE = 'CREATE_PROFILE';
export const createProfile = text => ({
    type: CREATE_PROFILE,
    payload: {text},
});

export const DELETE_PROFILE = 'DELETE_PROFILE';
export const deleteProfile = text => ({
    type: DELETE_PROFILE,
    payload: {text},
});

