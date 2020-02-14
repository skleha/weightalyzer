import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  // If a returning user already has a session token stored in local storage
  if (localStorage.jwtToken) {

    // Set that token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a pre-configured state, add session slice of state
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    
    // Configure store with preloaded state
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {

      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = '/login';
    }

  } else {

    // If this is a first time user, start with an empty store
    store = configureStore({});
  }

  // Find element 'root' on the pages
  const root = document.getElementById('root');

  // Replace element 'root' with 'Root' component
  ReactDOM.render(<Root store={store} />, root);
});
