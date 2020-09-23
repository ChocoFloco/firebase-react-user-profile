import { all, put, takeLatest } from 'redux-saga/effects';
import { TYPES } from './registerActions';
import * as firebase from 'firebase';

export function* signUp({ args }) {
	try {
        const { username, email, password, passwordConfirm, callback } = args;
        if (password === passwordConfirm){
            const result = yield firebase.auth().createUserWithEmailAndPassword(email, password);
            const { user } = result;

            yield firebase.database().ref('users').child(user.uid).update({ name: username });
            yield put({ type: TYPES.SIGN_UP_SUCCESS });
            callback && callback();
        }else{
            yield put({ type: TYPES.SIGN_UP_ERROR, error: 'Passwords do not match.' });
        }
	}
	catch (e) {
		yield put({ type: TYPES.SIGN_UP_ERROR, error: e});
	}
}


export default function* saga() {
	yield all([
		takeLatest(TYPES.SIGN_UP, signUp),
	]);
}
