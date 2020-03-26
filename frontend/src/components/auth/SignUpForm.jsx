import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/session_actions';


const SignUpForm = () => {

  const [credentials, setCredentials] = useState({
    email: '',
    handle: '',
    password: '',
    password2: ''
  })

  const dispatch = useDispatch();

  const handleCredentialChange = (e, field) => {
    let data = e.target.value;

    setCredentials(currentState => ({
      ...currentState,
      [field]: data
    }))
  }

  const handleSubmit = () => {
    dispatch(signup(credentials))
  }


  return (

    <div>
      <form onSubmit={handleSubmit}>

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