import React from 'react'
import './HomePage.css'
import { HomeSection } from '../../component/HomeSection/HomeSection'
import { Navbar } from '../../component/SecNavbar/Navbar'
import logop from '../../assets/images/cube_002.png'
import logol from '../../assets/images/cube_001.png'
import { skills } from '../../skills'
import { Link } from 'react-router-dom'
import { Footer } from '../../component/Footer/Footer'
import { AboutMe } from '../../component/AboutMe/AboutMe'

export const HomePage = () => {
  return (
    <div className='container'>
        <HomeSection />
        <AboutMe />
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
                    <Link to='/' className='btn btn-works'>SEE MY WORKS ----</Link>
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
        </section>
        <section className="four">
            <Navbar fill='#ccf381'logo={logol} />
            <div className="send-message">
                <header className='send-message-header'>
                    <h1>Send me a message! &#128231;</h1>
                    <p>
                        Got a question or proposal, or just want <br />
                        to say hello? Go ahead.
                    </p>
                </header>
                <form className="send-message-form">
                    <div className="first-form">
                        <div className="form-ne">
                            <label htmlFor='name'>Your Name</label>
                            <input type="text" id='name' placeholder='Enter your name' />
                        </div>
                        <div className="form-ne">
                            <label htmlFor='email'>Email Address</label>
                            <input type="text" id='email' placeholder='Enter your email address' />
                        </div> 
                    </div>
                    <div className="second-form">
                        <label htmlFor='message'>Your Message</label>
                        <textarea id='message' rows="7" minLength="30" placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?'></textarea>
                    </div>
                    <input className='btn btn-message' type="submit" value="SHOOT ----->" />
                </form>
            </div>
        </section>
        <Footer />
    </div>
  )
}
