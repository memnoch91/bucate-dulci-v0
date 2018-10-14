import React from 'react'
import { Link } from 'react-router-dom';

//CSS
import './navbar.scss'
//Components



function Navbar () {
  return (
    <div className="navbar">
        <ul className="navbar-links">
            <li className="link-li"><Link to="/">Home</Link></li>
            <li className="link-li"><Link to="portfolio">Bucatele Noastre</Link></li>
            <li className="link-li"><Link to="about">Despre Noi</Link></li>
            <li className="link-li"><Link to="contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar;
