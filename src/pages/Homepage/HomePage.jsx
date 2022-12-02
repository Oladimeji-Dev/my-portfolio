import React from 'react'
import './HomePage.css'
import { HomeSection } from '../../component/HomeSection/HomeSection'
import { AboutMe } from '../../component/AboutMe/AboutMe'
import { TechnicalSkills } from '../../component/TechnicalSkills/TechnicalSkills'
import { SendMessage } from '../../component/SendMessage/SendMessage'
import { Footer } from '../../component/Footer/Footer'
export const HomePage = () => {
  return (
    <div className='container'>
        <HomeSection />
        <AboutMe />
        <TechnicalSkills />
        <SendMessage />
        <Footer shownav={true} />
    </div>
  )
}
