import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './main/Splash';
import SignUpForm from './auth/RegisterForm';
import LoginForm from "./auth/LoginForm";
import WeightView from "./main/WeightView";
import WeightEnter from "./main/WeightEnter";
import { logout } from "../actions/session_actions";
import '../stylesheets/reset.css'
import '../stylesheets/app.css';
import '../stylesheets/weights.css';


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
        <form className="logout-button" onSubmit={e => handleLogout(e)}>
          <input type="submit" value="Logout" />
        </form>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className="header-title">Weight Tracker v1.0</div>
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/register" component={SignUpForm} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/weightview" component={WeightView} />
        <ProtectedRoute exact path="/weightenter" component={WeightEnter} />
      </Switch>
      {logoutButton()}
    </div>
  );

};

export default App;
