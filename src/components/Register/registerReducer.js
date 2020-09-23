import { TYPES } from './registerActions';


// The initial state of the ExampleSimple
const initialState = {
    isLoading: false,
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SIGN_UP:
            return { ...state, isLoading: true };
        case TYPES.SIGN_UP_SUCCESS:
            return { ...state, isLoading: false, error: null };            
        case TYPES.SIGN_UP_ERROR:
            return { ...state, isLoading:false, error: action.error.message };                                 
        default:
            return state;
    }
}

export default reducer;
