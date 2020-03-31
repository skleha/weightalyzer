import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../actions/session_actions';
import '../../stylesheets/auth.css';

const SignUpForm = props => {

  const [credentials, setCredentials] = useState({
    email: '',
    handle: '',
    password: '',
    password2: '',
    errors: {}
  });

  const signedIn = useSelector(state => state.session.isSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (signedIn) props.history.push("/login");    
    // Need to clear errors on successful login
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

  return (

    <div>
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
          value={credentials.handle}
          onChange={e => handleCredentialChange(e, "handle")}
          placeholder="Handle"
        />
        <br />

        <input
          type="text"
          value={credentials.password}
          onChange={e => handleCredentialChange(e, "password")}
          placeholder="Password"
        />
        <br />

        <input
          type="text"
          value={credentials.password2}
          onChange={e => handleCredentialChange(e, "password2")}
          placeholder="Confirm Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );

}

export default SignUpForm;