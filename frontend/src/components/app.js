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
import '../stylesheets/reset.scss'
import '../stylesheets/app.scss';
import '../stylesheets/weights.scss';
import '../stylesheets/splash.scss';
import '../stylesheets/auth.scss';


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
        <div className="logout-button-container">
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className="header-title">Weightalyzer v1.0</div>
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/register" component={SignUpForm} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/weightenter" component={WeightEnter} />
        <ProtectedRoute exact path="/weightview" component={WeightView} />
      </Switch>
      {logoutButton()}
    </div>
  );

};

export default App;
