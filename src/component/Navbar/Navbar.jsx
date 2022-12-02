import React from 'react'
import './Navbar.css'
// import menu from '../../assets/images/menu.png'
export const Navbar = ({logo,fill}) => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Zm7,6H9v2H23Zm0,5H9v2H23Zm0,5H9v2H23Z" fill={fill} data-name="15  Menu, Hamburger, Hamburger Menu"/></svg>
    </div>
  )
}
