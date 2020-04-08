import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../actions/session_actions';

const SignUpForm = props => {

  const [credentials, setCredentials] = useState({
    email: '',
    handle: '',
    password: '',
    password2: '',
  });

  const signedIn = useSelector(state => state.session.isSignedIn);
  const registrationErrors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    if (signedIn) props.history.push("/login");    
    // Need to clear session errors on successful register
  })

  const handleCredentialChange = (e, field) => {
    let data = e.target.value;

    setCredentials(currentState => ({
      ...currentState,
      [field]: data
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup(credentials))
  }

  const renderErrors = () => {

    const errorKeys = Object.keys(registrationErrors);
    const showErrors = errorKeys.length !== 0 ? "show" : "";

    return (
      <ul className={`auth-errors ${showErrors}`}>
        {errorKeys.map((error, i) =>
          <li key={`error-${i}`}>{registrationErrors[error]}</li>
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
          onChange={e => handleCredentialChange(e, "email")}
          placeholder="Email"
        />
        <br />

        <input
          type="text"
          value={credentials.handle}
          onChange={e => handleCredentialChange(e, "handle")}
          placeholder="Handle"
        />
        <br />

        <input
          type="password"
          value={credentials.password}
          onChange={e => handleCredentialChange(e, "password")}
          placeholder="Password"
        />
        <br />

        <input
          type="password"
          value={credentials.password2}
          onChange={e => handleCredentialChange(e, "password2")}
          placeholder="Confirm Password"
        />
        <br />
        
        <button type="submit" onClick={handleSubmit}>Register</button>

        <div className="auth-div">Did you need to <Link to="/login">login</Link>?</div>

        { renderErrors() }

      </form>
    </div>
  );

}

export default SignUpForm;