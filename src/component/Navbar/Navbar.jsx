import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import hamlogo from '../../assets/images/002_txt.png'
import close from '../../assets/images/x.svg'
// import menu from '../../assets/images/menu.png'
export const Navbar = ({logo,fill}) => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className="menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Zm7,6H9v2H23Zm0,5H9v2H23Zm0,5H9v2H23Z" fill={fill} data-name="15  Menu, Hamburger, Hamburger Menu"/></svg>
        </div>
        <div className="hambuger-nav">
          <div className="hambuger-nav-container">
            <header>
              <img className='ham-nav-logo' src={hamlogo} alt="logo" />
              <img className='ham-nav-close' src={close} alt="close" />
            </header>
            <ul className='hambuger-nav-links'>
              <li>
                <Link to="/work">My Work</Link>  
              </li>
              <li>
                <a href="#2">My Resume</a>
              </li>
            </ul>
            <ul className='hambuger-nav-links'>
              <p>SAY HELLO</p>
              <li>
                  <a href="#2">hello@Oladimeji.com</a>
              </li>
              <li>
                  <a href="#2">t.me/mroladimeji</a>
              </li>
            </ul>
            <ul className='hambuger-nav-social'>
              <li>
                  <a href="#2">TW</a>
              </li>
              <li>
                  <a href="#2">LN</a>
              </li>
              <li>
                  <a href="#2">YT</a>
              </li>
              <li>
                  <a href="#2">GH</a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
