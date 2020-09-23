const TYPES = {
    SIGN_UP: 'SIGN_UP',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    SIGN_UP_ERROR: 'SIGN_UP_ERROR'
};

const signUp = (args) => {
    return { 
        type: TYPES.SIGN_UP, 
        args
    };
}

export {
    TYPES,
    signUp,
};