import React, {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../slices/userApiSlice';
import { setUserInfo } from '../../slices/authenticationSlice';
import './register.css';


function Register() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== cpassword) toast.error("Passwords doesn't match");
    else{
      try{
        const res = await register({fname, lname, email, password}).unwrap();
        dispatch(setUserInfo({...res}));
        navigate('/');
      }
      catch (error){
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <div onSubmit={handleSubmit} className="registermaster">
        <form>
          <div className="heading">
            <h1>Registration Form</h1>
          </div>
          <div>
            <label className='registerLabel' htmlFor="fname">First Name</label><br />
            <input className='registerInput' type="text" name="fname" id="fname" value={fname} onChange={(e) => setFname(e.target.value)}/>
          </div>
          <div>
            <label className='registerLabel' htmlFor="lname">Last Name</label><br />
            <input className='registerInput' type="text" name="lname" id="lname" value={lname} onChange={(e) => setLname(e.target.value)}/>
          </div>
          <div>
            <label className='registerLabel' htmlFor="email">Email</label><br />
            <input className='registerInput' type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label className='registerLabel' htmlFor="password">Password</label><br />
            <input className='registerInput' type="password" name="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <label className='registerLabel' htmlFor="cpassword">Confirm Password</label><br />
            <input className='registerInput' type="cpassword" name="cpassword" value={cpassword} id="cpassword" onChange={(e) => setCpassword(e.target.value)}/>
          </div>
          <button className="registerSubmitbtn" type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Register