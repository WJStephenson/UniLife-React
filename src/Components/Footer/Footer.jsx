import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import { BsFacebook,  } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";


function Footer() {
  return (
    <div className='footer-container'>
      <div className='social-container'>
        <div className='keep-in-touch'>
          <h2>Keep in touch</h2>
          <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
          <input type="email" placeholder='Your email' />
        </div>
        <div className='socialize'>
          <h2>Let's socialize</h2>
          <div className='social-link'>
            <BsFacebook />
            <p>Facebook</p>
          </div>
          <div className='social-link'>
            <AiFillTwitterCircle />
            <p>Twitter</p>
          </div>
          <div className='social-link'>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className='links-container'>
        <div className='links'>
          <Link to={'#'}>About Us</Link>
          <Link to={'#'}>Terms & Conditions</Link>
          <Link to={'#'}>Privacy & Cookies Policy</Link>
        </div>
        <div className='copywrite'>
          <p>2022</p>
          <p>&copy;UniLife</p>
        </div>
      </div>
    </div>
  )
}

export default Footer