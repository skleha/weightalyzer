import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './main/Splash';
import SignUpForm from './auth/SignUpForm';
import LoginForm from "./auth/LoginForm";


const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/signup" component={SignUpForm} />
    <AuthRoute exact path="/login" component={LoginForm} />
  </Switch>
);

export default App;
