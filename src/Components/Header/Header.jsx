import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav className='header-container'>
        <div className='header-home'>
            <Link to={'/'}>UniLife</Link>
        </div>
        <div className='header-links'>
            <Link to={'#'}>Shortlist</Link>
            <Link to={'#'}>Contact Us</Link>
        </div>
    </nav>
  )
}

export default Header