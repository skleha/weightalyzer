import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';



const SignUpForm = () => {

  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    handle: '',
    password: '',
    password2: ''
  })

  const signedIn = useSelector(state => state.session.isSignedIn);
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={signUpInfo.email}
        onChange={e =>
          setSignUpInfo(currentState => ({
            ...currentState,
            email: e.target.value
          }))
        }
        placeholder="Email"
      />
      <br />

      <input
        type="text"
        value={signUpInfo.handle}
        onChange={e =>
          setSignUpInfo(currentState => ({
            ...currentState,
            handle: e.target.value
          }))
        }
        placeholder="Handle"
      />
      <br />

      <input
        type="password"
        value={signUpInfo.password}
        onChange={e =>
          setSignUpInfo(currentState => ({
            ...currentState,
            password: e.target.value
          }))
        }
        placeholder="Password"
      />

      <br />

      <input
        type="password"
        value={signUpInfo.password2}
        onChange={e =>
          setSignUpInfo(currentState => ({
            ...currentState,
            password2: e.target.value
          }))
        }
        placeholder="Confirm Password"
      />
      <br />
      <input type="submit" value="Submit" />
    </div>
  );

}


export default SignUpForm;