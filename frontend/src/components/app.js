import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './main/Splash';
import SignUpForm from './auth/SignUpForm';
import LoginForm from "./auth/LoginForm";
import WeightView from "./main/WeightView";
import { logout } from "../actions/session_actions";


const App = () => {

  const isAuthenticated = useSelector(state => state.session.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  const logoutButton = () => {

    if (isAuthenticated) {
      return (
        <form onSubmit={e => handleLogout(e)}>
          <input type="submit" value="Logout" />
        </form>
      );
    } else {
      return null;
    } 
  }

  return (
    <div>
      <div className="header-title">Weight Tracker v1.0</div>
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/signup" component={SignUpForm} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/weightview" component={WeightView} />
      </Switch>
      { logoutButton }
    </div>
  );

};

export default App;
