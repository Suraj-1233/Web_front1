import React from 'react';
import '../Css/Header.css';
import img from '../img/event/logo.png';
function Header1() {
  return (
    <div className=''>
        <nav class="navbar navbar-light bg-light justify-content-between">
  <img src={img} width="200"  alt='ha bhai'></img>
   
    <div>
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    </div>
  
   
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Verify Your Certificate</button>
    
</nav>
    </div>
  )
}

export default Header1;