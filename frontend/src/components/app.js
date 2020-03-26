import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import SignUpContainer from './auth/SignUpFormContainer';




const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={MainPage} />
    <AuthRoute exact path="/signup" component={SignUpContainer} />
  </Switch>
);

export default App;
