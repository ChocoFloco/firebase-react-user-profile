import { connect } from 'react-redux';
import { signUp } from './registerActions';
import Register from './Register';


const mapStateToProps = state => {
    const { error, isLoading } = state.register;
	return {
        error,
        isLoading
	};
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (args) => dispatch(signUp(args)),
    }
};

const connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);


export default connected;