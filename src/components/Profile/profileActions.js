
const TYPES = {
    SAVE_PROFILE: 'SAVE_PROFILE',
    SAVE_PROFILE_SUCCESS: 'SAVE_PROFILE_SUCCESS',
    SAVE_PROFILE_ERROR: 'SAVE_PROFILE_ERROR',
    SAVE_PHOTO: 'SAVE_PHOTO',
    SAVE_PHOTO_ERROR: 'SAVE_PHOTO_ERROR',
    SAVE_PHOTO_SUCCESS: 'SAVE_PHOTO_SUCCESS',
    SET_EDIT_MODE: 'SET_EDIT_MODE',
};

const saveProfile = (args) => {
    return { 
        type: TYPES.SAVE_PROFILE, 
        args
    };
}

const savePhoto = (uid, file) => {
    return { 
        type: TYPES.SAVE_PHOTO, 
        uid,
        file
    };
}

const setEditMode = (mode) => ({ type: TYPES.SET_EDIT_MODE, mode })

export {
    TYPES,
    saveProfile,
    savePhoto,
    setEditMode
};