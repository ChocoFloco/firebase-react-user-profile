import { connect } from 'react-redux';
import Profile from './Profile';
import { firebaseConnect } from 'react-redux-firebase';
import { getUserProfile } from '../../rootSelector';
import { savePhoto, saveProfile, setEditMode } from './profileActions';


const mapStateToProps = state => {
    const profile = getUserProfile(state);
    const { isLoading, error, isEditing } = state.profile;
	return {
        profileData: profile,
        isLoading,
        error,
        isEditing
	};
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveProfile: (args) => dispatch(saveProfile(args)),
        onSavePhoto: (uid, file) => dispatch(savePhoto(uid, file)),
        onEdit: (mode) => dispatch(setEditMode(mode))
    }
};

const connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);

const fbConnectedProfile = firebaseConnect((props) => {
        const { uid } = props;
        return [`users/${uid}`];
})(connected);


export default fbConnectedProfile;