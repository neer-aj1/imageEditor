import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useLogoutMutation } from '../../slices/userApiSlice';
import { removeUserInfo } from '../../slices/authenticationSlice';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(removeUserInfo());
      navigate('/');
    }
    catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="navbar container2">
      <div className="navbar_container">
        <nav>
          <div className="navbar_logo">
            <h4>ImgEdi</h4>
          </div>
          <div className="navbar_links">
            <ul>
              <li>
                <Link to={'/'} className='linkStyle'>Home</Link>
              </li>
              <li>
                <Link to={'/login'} className='linkStyle'>Login</Link>
              </li>
              <li>
                <Link to={'/register'} className='linkStyle'>Register</Link>
              </li>
              <li>
                <Link to={''} onClick={logoutHandler} className='linkStyle'>Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar