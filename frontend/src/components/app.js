import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import SignUpForm from './auth/SignUpForm';


const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={MainPage} />
    <AuthRoute exact path="/signup" component={SignUpForm} />
  </Switch>
);

export default App;
