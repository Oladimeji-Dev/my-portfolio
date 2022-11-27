import React from 'react'
import './HomePage.css'
import { HomeSection } from '../../component/HomeSection/HomeSection'
import { Navbar } from '../../component/SecNavbar/Navbar'
import logop from '../../assets/images/cube_002.png'
import profile from '../../assets/images/Profile.jpeg'

export const HomePage = () => {
  return (
    <div className='container'>
        <HomeSection />
        <section className="two">
            <Navbar fill='#5034d4'logo={logop} />
            <div className="about-me">
                <div className="about-me-image">
                    <img src={profile} alt="profile" />
                </div>
                <div className="about-me-dec">
                    <header className='about-me-dec-header'>
                        <h2>About me</h2>
                        <div className="border-line"></div>
                    </header>
                    <main className='about-me-dec-main'>
                        <p>
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <p>
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                        </p>
                        <p>
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                        </p>
                    </main>
                </div>
            </div>
        </section>
        <section className="three">
            <h1>Third Page</h1>
        </section>
        <section className="four">
            <h1>Fourth Page</h1>
        </section>
        <section className="five">
            <h1>Fifth Page</h1>
        </section>
    </div>
  )
}
