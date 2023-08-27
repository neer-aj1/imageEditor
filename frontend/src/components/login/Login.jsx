import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useLoginMutation} from '../../slices/userApiSlice';
import {setUserInfo} from '../../slices/authenticationSlice';
import {Link, useNavigate} from 'react-router-dom';
import './login.css';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const {userInfo} = useSelector(state => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const user = await login({email, password}).unwrap();
      dispatch(setUserInfo({...user}));
      navigate('/');
    }
    catch(err){
      toast.error(err?.data?.message || err.error);
    }
  };

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
          <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
          <p style={{display:'flex', justifyContent:'space-evenly', gap:'10px'}}>Not registered? <span><Link to='/register'>Register</Link></span></p>
          <button className="loginSubmitbtn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login