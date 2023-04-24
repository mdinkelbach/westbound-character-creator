import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Modal from "../ModalSignup/index.js"
import logo from "../../assets/logo512.png"

function Nav({ isBusiness, setIsBusiness }) {

  // State variables
  const [showModal, setShowModal] = useState(false);

  // Function handling nav buttons
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li className="mx-3"> | </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="mx-3"> | </li>
          <li className="mx-1">
            {/* // TODO: if person clicks USER or BUSINESS, setShowModal(false) && link to signup
                // else, simply setShowModal(false)
                // when modal is closed, go to signup page */}
            <Link to="/"
              onClick={() => {
                setShowModal(true)
              }}>
              Signup
            </Link>
            {/* Insert Signup Modal here that allows user to select whether they signup as a business or a user */}
            <Modal
              isVisible={showModal}
              onClose={() => {
                setShowModal(false);
              }}
              isBusiness={isBusiness}
              setIsBusiness={setIsBusiness}
            >
            </Modal>
          </li>
        </ul>
      );
    }
  }

  // React Navbar
  return (
    <header className="header">
      <div className='left-nav'>
        <h1>
          <Link to="/">
            <img className='logo' src={logo} alt="Bexar Market Logo"></img>
          </Link>
        </h1>
        <h2>
          <Link to="/about" className='nav-option'>
            About
          </Link>
        </h2>
        {/* Search feature is Future v2 development */}
        {/*<h2>
          <Link to="/search" className='nav-option'>
            Search
          </Link>
        </h2>*/}
      </div>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;