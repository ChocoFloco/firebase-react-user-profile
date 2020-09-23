import { all, put, takeLatest } from 'redux-saga/effects';
import { TYPES } from './loginActions';
import * as firebase from 'firebase';

export function* signIn({args}) {
	try {
        const { username, password } = args;
        yield firebase.auth().signInWithEmailAndPassword(username, password);
        yield put({ type: TYPES.SIGN_IN_SUCCESS });
	}
	catch (e) {
		yield put({ type: TYPES.SIGN_IN_ERROR, error: e});
	}
}


export default function* saga() {
	yield all([
		takeLatest(TYPES.SIGN_IN, signIn),
	]);
}
