const TYPES = {
    SIGN_IN: 'SIGN_IN',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_ERROR: 'SIGN_IN_ERROR'
};

const signIn = (args) => {
    return { 
        type: TYPES.SIGN_IN, 
        args
    };
}

export {
    TYPES,
    signIn,
};