import React from 'react';

const Splash = props => {

  const handleRegisterClick = () => {
    props.history.push("/register");
  }

  const handleLoginClick = () => {
    props.history.push("/login");
  }

  return (
    <div className="splash-container">
    
      <div className="splash-copy">
        A simple application to keep track of your weight over time!
      </div>
    
      <div className="splash-button-tray">
        <button onClick={handleRegisterClick}>Register</button>
        <button onClick={handleLoginClick}>Login</button>
      </div>

    </div>
  )
}

export default Splash;