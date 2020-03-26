import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import SignUpForm from './auth/SignUpForm';
import LoginForm from "./auth/LoginForm";


const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={MainPage} />
    <AuthRoute exact path="/signup" component={SignUpForm} />
    <AuthRoute exact path="/login" component={LoginForm} />
  </Switch>
);

export default App;
