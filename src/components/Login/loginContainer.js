import { connect } from 'react-redux';
import { signIn } from './loginActions';
import Login from './Login';


const mapStateToProps = state => {
    const { error, isLoading } = state.login;
	return {
        error,
        isLoading
	};
};

const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (args) => dispatch(signIn(args)),
    }
};

const connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);


export default connected;