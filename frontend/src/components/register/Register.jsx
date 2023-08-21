import React, {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css';

function Register() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    if(password !== cpassword) toast.error("Passwords doesn't match");
  }

  return (
    <>
      <div onSubmit={handleSubmit} className="master">
        <form>
          <div className="heading">
            <h1>Registration Form</h1>
          </div>
          <div>
            <label htmlFor="fname">First Name</label><br />
            <input type="text" name="fname" id="fname" onChange={(e) => setFname(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="lname">Last Name</label><br />
            <input type="text" name="lname" id="lname" onChange={(e) => setLname(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="cpassword">Confirm Password</label><br />
            <input type="cpassword" name="cpassword" id="cpassword" onChange={(e) => setCpassword(e.target.value)}/>
          </div>
          <button className="submitbtn" type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Register