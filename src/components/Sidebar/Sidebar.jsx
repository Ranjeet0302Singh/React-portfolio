import './Sidebar.scss'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoR from '../../assets/images/R-logo.png'
import LogoSubtitle from '../../assets/images/Ranjeet.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <div className={showNav ? 'nav-bar' : 'mobile-show'}>
        <Link className="logo" to="/">
          <img src={LogoR} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="Logo" />
        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon
              onClick={() => setShowNav(false)}
              icon={faHome}
              color="#4d4d4e"
            />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon
              onClick={() => setShowNav(false)}
              icon={faUser}
              color="#4d4d4e"
            />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon
              onClick={() => setShowNav(false)}
              icon={faEnvelope}
              color="#4d4d4e"
            />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ranjeet-singh-rawat/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ranjeet0302Singh"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </div>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </>
  )
}

export default Sidebar
