import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/session_actions";


const LoginForm = props => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    errors: {}
  });

  const authenticated = useSelector(state => state.session.isAuthenticated)
  const dispatch = useDispatch();

  useEffect(() => {
    if (authenticated) props.history.push("/weightview");
    // Need to clear errors on successful login
  });


  const handleCredentialChange = (e, field) => {
    let data = e.target.value;

    setCredentials(currentState => ({
      ...currentState,
      [field]: data
    }));
  };


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(credentials));
  };


  return (
    <div className="auth-form">
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          value={credentials.email}
          onChange={e => handleCredentialChange(e, "email")}
          placeholder="Email"
        />
        <br />

        <input
          type="text"
          value={credentials.password}
          onChange={e => handleCredentialChange(e, "password")}
          placeholder="Handle"
        />
        <br />

        <input type="submit" value="Submit" />
        
      </form>
    </div>
  );

}

export default LoginForm;