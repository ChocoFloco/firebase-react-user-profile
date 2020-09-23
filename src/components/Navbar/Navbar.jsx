import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase  from 'firebase/app';
import './Navbar.css';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.props.history.listen((location, action) => {/*route change logic*/});
        this.state = {
            userLoggedIn: this.props.loggedInUserToken == null ? false : true
        };
    }

    logout(){
        const me = this;
        const onSignOut = () => me.props.history.push('/');
        const onSignOutError = (error) => console.log('Error logging out: ', error);
        firebase.auth().signOut().then(onSignOut, onSignOutError);
    }

    render() {

        let authLink;
        if (this.state.userLoggedIn === false){
            authLink = <Link className={'item ' + (this.props.location.pathname === '/login' ? 'active' : '')} to="/login">Login</Link>
        }else{
            authLink = <a className="item" onClick={() => this.logout()}>Logout</a>
        }

        return (
            <div className="ui container top-nav" style={{marginTop:'20px'}}>
                <div className={this.props.hidden ? 'hidden' : 'navbar'}>
                    <div className="ui teal six item menu">
                        <Link className={'item ' + (this.props.location.pathname === '/' ? 'active' : '')} to="/">My Profile</Link>
                        {authLink}
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;