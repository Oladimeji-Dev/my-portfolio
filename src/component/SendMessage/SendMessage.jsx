import React from 'react'
import './SendMessage.css'
import { Navbar } from '../../component/SecNavbar/Navbar'
import logol from '../../assets/images/cube_001.png'
export const SendMessage = () => {
  return (
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
  )
}
