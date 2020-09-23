import { all, fork } from 'redux-saga/effects';
import profileSaga from './components/Profile/profileSaga';
import registerSaga from './components/Register/registerSaga';
import loginSaga from './components/Login/loginSaga';

function* rootSaga() {
    yield all([
        fork(profileSaga),
        fork(registerSaga),
        fork(loginSaga)
    ]);
}

export default rootSaga;



