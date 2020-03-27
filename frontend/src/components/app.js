import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './main/Splash';
import SignUpForm from './auth/SignUpForm';
import LoginForm from "./auth/LoginForm";
import WeightView from "./main/WeightView";


const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/signup" component={SignUpForm} />
    <AuthRoute exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/weightview" component={WeightView} />
  </Switch>
);

export default App;
