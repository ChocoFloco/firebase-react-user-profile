import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import firebase  from 'firebase';
import { DB_CONFIG } from './config/config';

//custom components
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

//redux components
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import createReduxStore from './createReduxStore';


function PrivateRoute ({component: Component, authed, uid, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} uid={uid}  />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
}

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            loggedInUserToken: null
        }

        this.store = createReduxStore();

        if (firebase.apps.length === 0)
            firebase.initializeApp(DB_CONFIG);
        
        const fb_config = {
            userProfile: 'users'
        }
        
        const { store } = this;
        this.rrfProps = {
            firebase,
            config: fb_config,
            dispatch: store.dispatch
        }
    }

    componentDidMount(){
        const { authStateHasChanged } = this;
        firebase
            .auth()
            .onAuthStateChanged(authStateHasChanged);
    }

    authStateHasChanged = (user) => {
        const me = this;
        if (!user){
            me.setState({ 
                loggedInUserToken: null 
            });
            return;
        }

        user.getIdToken().then((data) => {
            me.setState({ 
                loggedInUserToken: data, 
                uid: user.uid 
            });
        });
    };

    render() {
        //wrap the navbar in withRouter for location info in props
        const NavbarWithLocation = withRouter(Navbar);
        const LoginWithLocation = withRouter(Login);
        const SignupWithLocation = withRouter(Register);
        const { rrfProps, store } = this;
        return (
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HashRouter>
                        <div>
                            <Header />
                            <NavbarWithLocation 
                                loggedInUserToken={this.state.loggedInUserToken} 
                                hidden={this.state.loggedInUserToken == null} 
                            />
                            <PrivateRoute 
                                authed={this.state.loggedInUserToken != null} 
                                uid={this.state.uid}  
                                exact path="/" 
                                component={Profile} 
                            />
                            <Route exact path="/signup" component={SignupWithLocation} />
                            <Route 
                                path={'/login'} 
                                component={() => <LoginWithLocation loggedInUserToken={this.state.loggedInUserToken} />} 
                            />
                        </div>
                    </HashRouter>
                </ReactReduxFirebaseProvider>
            </Provider>
        )
    }
}

export default App;
