import React from 'react'
import { Link } from 'react-router-dom'
import logol from '../../assets/images/cube_001.png'
import { Navbar } from '../../component/SecNavbar/Navbar'
import './Footer.css'
export const Footer = () => {
    const thisYear = new Date().getFullYear()
  return (
    <section className="five">
        <footer>
            <Navbar fill='#ccf381'logo={logol} />
            <div className="footer-section">
                <header className='footer-section-header'>
                    <h1>Get In Touch &#128519;</h1>
                    <p>
                        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                </header>
                <div className="footer-section-buttons">
                    <Link className='btn btn-footer' to="/">Say Hello</Link>
                    <Link className='btn btn-footer' to="/">My Work</Link>
                    <Link className='btn btn-footer' to="/">My Resume</Link>
                </div>
                <div className="footer-section-footer">
                    <div className="footer-name">
                        &copy; Abdulwasiu Oladimeji Saliman {thisYear}
                    </div>
                    <div className="footer-socials">
                        <Link to="/">TW</Link>
                        <Link to="/">GH</Link>
                        <Link to="/">LN</Link>
                        <Link to="/">YT</Link>
                    </div>
                </div>
            </div>
        </footer>
    </section>
  )
}
