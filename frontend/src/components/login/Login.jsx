import React from 'react';
import './login.css';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    if(password !== cpassword) toast.error("Passwords doesn't match");
  }
  return (
    <>
      <div onSubmit={handleSubmit} className="loginmaster">
        <form className='loginForm'>
          <div className="heading">
            <h1>Login</h1>
          </div>
          <div>
            <label className="login_label" htmlFor="email">Email</label><br />
            <input className='login_input' type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label className="login_label" htmlFor="password">Password</label><br />
            <input className='login_input' type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button className="loginSubmitbtn" type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login