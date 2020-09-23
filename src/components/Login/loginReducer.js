import { TYPES } from './loginActions';

// The initial state of the ExampleSimple
const initialState = {
    isLoading: false,
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SIGN_IN:
            return { ...state, isLoading: true, error: '' };
        case TYPES.SIGN_IN_SUCCESS:
            return { ...state, isLoading: false };            
        case TYPES.SIGN_IN_ERROR:
            return { ...state, isLoading:false, error: action.error.message };                                 
        default:
            return state;
    }
}

export default reducer;
