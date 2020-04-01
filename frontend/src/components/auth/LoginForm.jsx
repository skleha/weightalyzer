import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { login } from "../../actions/session_actions";


const LoginForm = props => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const authenticated = useSelector(state => state.session.isAuthenticated);
  const loginErrors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authenticated) props.history.push("/weightview");
    // Need to clear errors on successful login
  });


  const handleInput = (e, field) => {
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

  const renderErrors = () => {
    
    const errorKeys = Object.keys(loginErrors);
    const showErrors = errorKeys.length !== 0 ? "show" : "";

    return (
      <ul className={`auth-errors ${showErrors}`}>
        { errorKeys.map((error, i) => 
          <li key={`error-${i}`}>{loginErrors[error]}</li>
        )}
      </ul>
    )  
  }


  return (
    <div>
      <form className="auth-form" onSubmit={e => handleSubmit(e)}>

        <input
          type="text"
          value={credentials.email}
          onChange={e => handleInput(e, "email")}
          placeholder="Email"
        />
        <br />

        <input
          type="text"
          value={credentials.password}
          onChange={e => handleInput(e, "password")}
          placeholder="Pasword"
        />
        <br />

        <input type="submit" value="Login" />
        
        <div className="auth-div">Did you need to <Link to="/register">register</Link>?</div>

        { renderErrors() }

      </form>
    </div>
  );

}

export default LoginForm;