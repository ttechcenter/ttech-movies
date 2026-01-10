import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
         <div className="footer-icons">
             <i className="fa-brands fa-facebook-f"></i>
             <i className="fa-brands fa-instagram"></i>
             <i className="fa-brands fa-x-twitter"></i>
             <i className="fa-brands fa-youtube"></i>
    </div>
        <ul>
             <li>Audio Description</li>
             <li>Audio Description</li>
             <li>Help Center</li>
             <li>Gift Cards</li>
             <li>Media Center</li>
             <li>Investor Relations</li>
             <li>Jobs</li>
             <li>Terms of Use</li>
             <li>Privacy</li>
             <li>Legal Notices</li>
             <li>Cookie Preferences</li>
             <li>Corporate Information</li>
             <li>Contact Us</li>
        </ul>
        <p className='copyright'>Copyright 2026</p>
    </div>
  )
}

export default Footer