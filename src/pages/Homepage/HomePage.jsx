import React from 'react'
import './HomePage.css'
import { useState } from 'react'
import { HomeSection } from '../../component/HomeSection/HomeSection'
import { AboutMe } from '../../component/AboutMe/AboutMe'
import { TechnicalSkills } from '../../component/TechnicalSkills/TechnicalSkills'
import { SendMessage } from '../../component/SendMessage/SendMessage'
import { Footer } from '../../component/Footer/Footer'
export const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () =>{
    setToggle((prevtoggle) => !prevtoggle)
  }
  return (
    <div className='container'>
        <HomeSection toggle = {toggle} handleToggle = {handleToggle} />
        <AboutMe toggle = {toggle} handleToggle = {handleToggle} />
        <TechnicalSkills toggle = {toggle} handleToggle = {handleToggle} />
        <SendMessage toggle = {toggle} handleToggle = {handleToggle} />
        <Footer toggle = {toggle} handleToggle = {handleToggle} shownav={true} />
    </div>
  )
}
