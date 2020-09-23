import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Icon } from 'semantic-ui-react';
import Ribbon from '../Ribbon/Ribbon';

export default class Login extends Component {

    static propTypes = {
        onSignIn: PropTypes.func,
        error: PropTypes.string,
        isLoading: PropTypes.bool
    }

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }

        //if logged in, send to home route
        if (this.props.loggedInUserToken !== null){
            this.props.history.push('/');
        }
    }

    changeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    formPreventDefault(e) {
        e.preventDefault();
    }

    signUp = () => this.props.history.push('/signup');


    authUser = () => {
        const { username, password } = this.state;
        const { onSignIn } = this.props;
        onSignIn && onSignIn({
            username,
            password
        });
    }

    render() {
        const { error, isLoading } = this.props;
        return (
            <div>
                <Ribbon>Fork Me</Ribbon>
                <div className="ui container login">
                    <form className="ui form attached fluid login-form" onSubmit={this.formPreventDefault}>
                        <h1 className="ui dividing header">
                            Sample Profile
                        </h1>              
                        <div className="field">
                            <label>Username</label>
                            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeText} />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeText} />
                        </div>
                        <button id="loginButton" className="fluid ui teal basic button" onClick={this.authUser}>
                            <Icon name="lock" />
                            Login
                        </button>
                        <button id="signupButton" className="fluid ui teal button" onClick={this.signUp}>
                            <Icon name="user" />
                            Sign-up
                        </button>
                        <div className={'ui inverted dimmer ' + (isLoading === true ? 'active' : '')}>
                            <div className="ui text loader">Signing-in</div>
                        </div>               
                    </form>
                    { 
                        error ? 
                            <div className="ui fluid yellow message">                            
                                <div className="header"><Icon name="exclamation triangle" /> {error}</div>
                            </div> 
                        : '' 
                    }
                </div>
            </div>
        )
    };
}
