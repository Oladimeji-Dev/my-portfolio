import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import hamlogo from '../../assets/images/002_txt.png'
import close from '../../assets/images/x.svg'

export const Navbar = ({logo,fill,toggle,handleToggle}) => {
  
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className={toggle ? 'menu-hide' : 'menu'} onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Zm7,6H9v2H23Zm0,5H9v2H23Zm0,5H9v2H23Z" fill={fill} data-name="15  Menu, Hamburger, Hamburger Menu"/></svg>
        </div>
        <div className= {toggle ? "hambuger-nav" : "hambuger-nav menu-hide" }>
            <header>
              <img className='ham-nav-logo' src={hamlogo} alt="logo" />
              <img onClick={handleToggle} className='ham-nav-close' src={close} alt="close" />
            </header>
          <div className="hambuger-nav-container">
            <ul className='hambuger-nav-links'>
              <li>
                <Link to="/works">My Work</Link>  
              </li>
              <li>
                <a href="https://oladimeji-portfolio.netlify.app/">My Resume</a>
              </li>
            </ul>
            <ul className='hambuger-nav-links'>
              <p>SAY HELLO</p>
              <li>
                  <a href="mailto:salimanoladimeji33@gmail.com">hello@Oladimeji.com</a>
              </li>
              <li>
                  <a href="https://twitter.com/__oladimeji__">t.me/mroladimeji</a>
              </li>
            </ul>
            <ul className='hambuger-nav-social'>
              <li>
                  <a href="https://twitter.com/__oladimeji__">TW</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/abdulwasiu-saliman/">LN</a>
              </li>
              <li>
                  <a href="http://github.com/oladimeji-dev">YT</a>
              </li>
              <li>
                  <a href="http://github.com/oladimeji-dev">GH</a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
