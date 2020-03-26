import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../actions/session_actions';


const SignUpForm = () => {

  const [credentials, setCredentials] = useState({
    email: '',
    handle: '',
    password: '',
    password2: ''
  })

  // const signedIn = useSelector(state => state.session.isSignedIn);
  // const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  const handleStateChange = (e, field) => {
    let data = e.target.value;

    setCredentials(currentState => ({
      ...currentState,
      [field]: data
    }))
  }

  return (
    <div>
      <form onSubmit={dispatch(signup(credentials))}>
        <input
          type="text"
          value={credentials.email}
          onChange={e => handleStateChange(e, "email")}
          placeholder="Email"
        />
        <br />

        <input
          type="text"
          value={credentials.handle}
          onChange={e => handleStateChange(e, "handle")}
          placeholder="Handle"
        />
        <br />

        <input
          type="password"
          value={credentials.password}
          onChange={e => handleStateChange(e, "password")}
          placeholder="Password"
        />
        <br />

        <input
          type="password"
          value={credentials.password2}
          onChange={e => handleStateChange(e, "password2")}
          placeholder="Confirm Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );

}


export default SignUpForm;