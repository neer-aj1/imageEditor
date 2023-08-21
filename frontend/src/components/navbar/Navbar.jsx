import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
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
                <Link to={''} className='linkStyle'>Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar