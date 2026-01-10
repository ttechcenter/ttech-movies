import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import { logout } from '../../../firebase'


const Navbar = () => {
  return   (
    <div className='navbar'>
        
        <div className="navbar-left">
            <img src={logo} alt=""/>
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
            </ul>
        </div>

        <div className="navbar-right">
           <i className="fa-solid fa-magnifying-glass nav-icon"></i>
           <i className="fa-regular fa-bell nav-icon"></i>

           <div className="navbar-profile">
             <i className="fa-solid fa-user-circle profile-icon"></i>
             <i className="fa-solid fa-caret-down caret"></i>

             <div className="dropdown">
                 <p onClick={() => logout()}>Sign out of TTech Movies</p>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar