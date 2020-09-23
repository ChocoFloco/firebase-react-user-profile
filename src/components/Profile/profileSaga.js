import { all, put, takeLatest } from 'redux-saga/effects';
import { TYPES } from './profileActions';
import * as firebase from 'firebase';

export function* saveProfileToDB({ args }) {
	try {
		const { uid, changedAttributes } = args;
        yield firebase.database().ref(`users/${uid}`).update(changedAttributes);
        yield put({
            type: TYPES.SAVE_PROFILE_SUCCESS, 
		});
	}
	catch (e) {
		yield put({type: TYPES.SAVE_PROFILE_ERROR, e});
	}
}

export function* savePhotoToStorage({ uid, file }){
	const storageRef = firebase.storage().ref();
	const metadata = {
		contentType: 'image/jpeg'
	};
	
	// Upload the file and metadata
	const uploadTask = yield storageRef.child('users/' + uid + '/profileImage.jpg').put(file, metadata);
	const picUrl = yield uploadTask.ref.getDownloadURL();
	yield firebase.database().ref('users/' + uid).update({ picUrl });

	if (uploadTask.state === 'success')
		yield put({ type: TYPES.SAVE_PHOTO_SUCCESS });
	else
		yield put({ type: TYPES.SAVE_PHOTO_ERROR, error: 'Upload failed.' });
}


export default function* saga() {
	yield all([
		takeLatest(TYPES.SAVE_PROFILE, saveProfileToDB),
		takeLatest(TYPES.SAVE_PHOTO, savePhotoToStorage),
	]);
}
