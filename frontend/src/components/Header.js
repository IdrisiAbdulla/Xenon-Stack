import React, { useState }  from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false)
  const navigate = useNavigate();
 
  const logIn = () => {
   
    navigate('/Home');
    
}

  return (
   
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light "style={{backgroundImage: " radial-gradient(circle at 5.6% 54.5%, #fbfbfb 0%, rgb(24 39 51) 83.6%)"}}>
          {/* Container wrapper */}
          <div className="container-fluid ">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Navbar brand */}
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img onClick={logIn}
                  src="https://imgs.search.brave.com/UnQO4kQhlk_AOn4Aw4igz-IuznSY7eeNSoGUTkcKlyw/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/MVMtaUpfSDZjazZG/Z01Pa0owQ1VnSGFF/OCZwaWQ9QXBp"
                  height={60}
                  alt="MDB Logo"
                  loading="lazy"
                
                />
              </a>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">
                    Contact Us 
                  </NavLink>
                </li>
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
            {
          loggedin?
          <button className='btn btn-outline-danger'onClick={e=>{setLoggedin(false)}}>Logout</button>
          :
          <button className='btn btn-link'onClick={e =>{setLoggedin(true)}}>Login</button>
        }
           

          </div>
        </nav>
      </>
  
  );
};

export default Header;
