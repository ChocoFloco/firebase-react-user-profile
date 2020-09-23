import { combineReducers } from 'redux';
import profileReducer from './components/Profile/profileReducer';
import registerReducer from './components/Register/registerReducer';
import loginReducer from './components/Login/loginReducer';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    firebase: firebaseReducer,
    profile: profileReducer,
    register: registerReducer,
    login: loginReducer
});
