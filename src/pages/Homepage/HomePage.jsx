import React from 'react'
import './HomePage.css'
import { HomeSection } from '../../component/HomeSection/HomeSection'
import { Navbar } from '../../component/SecNavbar/Navbar'
import logop from '../../assets/images/cube_002.png'
import logol from '../../assets/images/cube_001.png'
import profile from '../../assets/images/Profile.jpeg'
import { skills } from '../../skills'
// import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='container'>
        <HomeSection />
        {/* <section className="two">
            <Navbar fill='#5034d4'logo={logop} />
            <div className="about-me">
                <div className="about-me-image">
                    <span className='about-me-image-border'>
                        <img src={profile} alt="profile" />
                    </span>
                </div>
                <div className="about-me-dec">
                    <header className='about-me-dec-header'>
                        <h2>About me</h2>
                        <div className="border-line"></div>
                    </header>
                    <main className='about-me-dec-main'>
                        <p>
                        Hello! My name is Abdulwasiu Oladimeji Saliman and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
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
            <Navbar fill='#5034d4'logo={logop} />
            <div className="knowledge">
                <div className="knowledge-projects">
                    <h1>
                        I build & Program stuff
                    </h1>
                    <p>
                        Open source projects, <br/>web apps and experimentals.
                    </p>
                    <a href='#1' className='btn btn-works'>SEE MY WORKS ----</a>
                </div>
                <div className="knowledge-skills">
                    <h1>Technical Skills</h1>
                    <div className="technical-icons">
                        {
                            skills.map((skill,index) =>(
                                <div key={index} className="skill-card">
                                    <img src={skill.image} alt='skill' />
                                    <p>
                                        {skill.name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section> */}
        <section className="four">
            <Navbar fill='#ccf381'logo={logol} />
            <div className="send-message">
                <header className='send-message-header'>
                    <h1>Send me a message!</h1>
                    <p>
                        Got a question or proposal, or just want <br />
                        to say hello? Go ahead.
                    </p>
                </header>
                <form className="send-message-form">
                    <div className="first-form">
                        <input type="text" placeholder='Enter your name' />
                        <input type="text" placeholder='Enter your email address' />
                    </div>
                    <div className="second-form">
                        <textarea placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?'></textarea>
                    </div>
                    <input className='btn' type="submit" value="SHOOT" />
                </form>
            </div>
        </section>
        <section className="five">
            <h1>Five page</h1>
        </section>
    </div>
  )
}
