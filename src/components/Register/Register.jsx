import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Register.css'
import { Icon } from 'semantic-ui-react';
import Ribbon from '../Ribbon/Ribbon';


export default class Register extends Component{

    static propTypes = {
        onSignUp: PropTypes.func,
        error: PropTypes.string,
        isLoading: PropTypes.bool
    }

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            email: '',
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

    signUp = () => {
        const { onSignUp } = this.props;
        const { username, email, password, passwordConfirm } = this.state;
        onSignUp && onSignUp({
            username,
            email, 
            password,
            passwordConfirm,
            callback: this.goToProfile
        });
    }

    goToProfile = () => this.props.history.push('/');

    render(){
        const { isLoading, error } = this.props;
        return(
            <div>
                <Ribbon>Fork Me</Ribbon>
                <div className="ui container signup">
                    <form className="ui form attached fluid signup-form" onSubmit={this.formPreventDefault}>
                        <h1 className="ui dividing header">
                            Sample Profile
                        </h1>              
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="username" placeholder="Name" value={this.state.username} onChange={this.changeText} />
                        </div>
                        <div className="field">
                            <label>E-mail</label>
                            <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={this.changeText} />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeText} />
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input type="password" name="passwordConfirm" placeholder="Confirm Password" value={this.state.passwordConfirm} onChange={this.changeText} />
                        </div>
                        <button id="signupButton" className="fluid ui teal basic button" onClick={this.signUp}>
                            <Icon name="lock" />
                            Sign-Up
                        </button>
                        <div className={'ui inverted dimmer ' + (isLoading === true ? 'active' : '')}>
                            <div className="ui text loader">Signing-up</div>
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
    }

}