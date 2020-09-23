This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Purpose

react-firebase-user-profile is a sample application created to illustrate some basic concepts working with react and firebase.

App includes user registration, login, and basic user profile with editable attributes and user image.


## Stack
* [ReactJS](http://www.reactjs.org/) - The client web framework used
* [Redux](https://redux.js.org/) - State Management
* [Redux-saga](https://redux-saga.js.org/) - Used to handle side effects
* [Firebase](https://firebase.google.com/) - Backend


## Setup

1. This app requires a firebase backend, you can sign up for a free account at firebase.com
2. Configuration file for backend resides in /src/config (example below)

~~~~
/* Get these settings from your firebase account */
export const DB_CONFIG = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
};

export const SERVER = {
    url: ''
};
~~~~

3. If you have any questions about this repository please don't hesitate to reach out


## Authors

* **Bryan Strader** - *full stack* - (https://github.com/bryanstrader)
* bryan@stoic.systems