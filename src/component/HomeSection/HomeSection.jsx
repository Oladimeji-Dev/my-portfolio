import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './HomeSection.css'
import logo from '../../assets/images/001_txt.png'
import profile from '../../assets/images/Profile.jpeg'
export const HomeSection = () => {
  return (
        <section className="one">
            <Navbar logo = {logo} />
            <div className='one-intro'>
                <div className='intro'>
                    <h1 className='intro-1'>
                        Frontend Developer<span className='intro-1-span'>.</span>
                    </h1>
                    <p className='intro-2'>
                        Hi, my name is
                    </p>
                    <h1 className='intro-3'>
                        Abdulwasiu Oladimeji Saliman <br />
                        <span>I build things for the web.</span>
                    </h1>
                    <p className='intro-4'>
                        I’m a software engineer specializing in building (and occasionally designing) 
                        exceptional digital experiences. Currently, I’m focused on building accessible, 
                        human-centered products at Upstatement.
                    </p>
                </div>
                <div className="profile-image">
                    <img src={profile} alt="profileimage" />
                </div>
            </div>
        </section>
    )
}
