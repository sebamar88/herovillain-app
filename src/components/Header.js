import React, { useState } from 'react';
import logo from '../images/superhero-logo.png';

function Header({ setIsAuth }) {
  const [isActive, setIsActive] = useState(false);
  function handleLogOut() {
    localStorage.clear();
    setIsAuth(false);
  }
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
        <a
          className='navbar-item'
          href='https://github.com/sebamar88/herovillain-app'
        >
          <img src={logo} width='130' alt='superhero logo' />
        </a>
  <button 
  className={`navbar-toggler ${!isActive ? 'collapsed' : ''}`}
  type="button" 
  data-toggle="collapse" 
  data-target="#navbarScroll" 
  aria-controls="navbarScroll" 
  aria-expanded="false" 
  aria-label="Toggle navigation"
  onClick={() => setIsActive(!isActive)}>
    <span className="navbar-toggler-icon"></span>
  </button>
  <div 
  className={`collapse navbar-collapse  ${
    isActive ? 'show' : ''
  }`}
  id="navbarScroll">
    <ul className="navbar-nav mr-auto ml-4 my-2 my-lg-0 navbar-nav-scroll">
      <li className="nav-item active">
        <a className="nav-link text-danger font-weight-bold" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-danger font-weight-bold" href="/search">Search</a>
      </li>
    </ul>
    <form className="d-flex">
      
    <button className='btn btn-danger' onClick={handleLogOut}>
                Log out
              </button>
    </form>
  </div>
</nav>


    
  );
}

export default Header;
