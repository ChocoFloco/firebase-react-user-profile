import { TYPES } from './profileActions';


// The initial state of the ExampleSimple
const initialState = {
    isEditing: false,
    isLoading: false,
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SAVE_PROFILE:
            return { ...state, isEditing: true };
        case TYPES.SAVE_PROFILE_SUCCESS:
            return { ...state, isEditing: false, error: null };            
        case TYPES.SAVE_PROFILE_ERROR:
            return { ...state, isLoading:false, error: action.error };
        case TYPES.SAVE_PHOTO:
            return { ...state, isLoading: true };         
        case TYPES.SAVE_PHOTO_SUCCESS:
            return { ...state, isLoading: false, isEditing:false };
        case TYPES.SAVE_PHOTO_ERROR:
            return { ...state, isLoading: false, error: action.error };
        case TYPES.SET_EDIT_MODE:
            return {...state, isEditing: action.mode}                                   
        default:
            return state;
    }
}

export default reducer;
