//header component with links to the homepage, shortlist and a modal for contacting us

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { AiOutlineHeart, AiOutlineMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Modal from 'react-modal'
import '../../Components/Modal/Modal.css'

function Header() {


  const [isContactOpen, setIsContactOpen] = useState(false) //state for is the contact modal open or not
  const [isNavOpen, setIsNavOpen] = useState(false) //state for is the nav mobile modal open

  const customStyles = { //styles for the modal
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '12px',
      maxWidth: '90vw',
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
  };

  const customNavStyles = { //styles for the nav modal
    content: {
      transform: 'translate(0, 95%)',
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.0)'
    }
  };

  function toggleNavMenu() {
    setIsNavOpen(!isNavOpen)
  }


  return (
    <>
      <nav className='header-container' id='header'>
        <div className='header-home'>
          <Link to={'/'}><img src='/public/unilife-logo.png' alt='unilife logo' />UniLife</Link>
        </div>
        <div className='header-links'>
          <Link to={'/shortlist'}><AiOutlineHeart />Shortlist</Link>
          <Link to={'#'} onClick={() => setIsContactOpen(true)}><AiOutlineMail />Contact Us</Link>
        </div>
        <button className='mobile-nav-button' onClick={toggleNavMenu}><AiOutlineMenu /></button>
        <Modal
          isOpen={isNavOpen}
          onRequestClose={() => setIsNavOpen(false)}
          contentLabel="Mobile menu"
          className={'nav-modal'}
        style={customNavStyles}
        >
          <div className='nav-modal'>
              <Link to={'/shortlist'}><AiOutlineHeart />Shortlist</Link>
              <Link to={'#'} onClick={() => setIsContactOpen(true)}><AiOutlineMail />Contact Us</Link>
          </div>
        </Modal>
      </nav>

      <Modal
        isOpen={isContactOpen}
        onRequestClose={() => setIsContactOpen(false)}
        contentLabel="Book a Viewing"
        style={customStyles}
      >
        <div className='modal-header'>
          <h2>Contact Us</h2>
          <div className='welcome'>
            <p>Feel free to contact us if you have any questions.</p>
            <p>Looking forward to hearing from you.</p>
          </div>
          <button className='modal-close-btn' onClick={() => setIsContactOpen(false)}><AiOutlineClose /></button>
        </div>
        <form className='booking-form'>
          <div className='form-part-1'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='Enter your name' />
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder='Enter your phone number' />
            <label htmlFor='you'>Are you a...</label>
            <select id='you'>
              <option value="student">Student</option>
              <option value="guardian">Parent/Guardian</option>
              <option value="agent">Agent</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className='form-part-2'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter your email address' />
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder='Enter your message'></textarea>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default Header