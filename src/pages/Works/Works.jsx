import React from 'react'
import { Footer } from '../../component/Footer/Footer'
import { Navbar } from '../../component/Navbar/Navbar'
import logop from '../../assets/images/002_txt.png'
import gitIcon from '../../assets/icons/github.svg'
import externalIcon from '../../assets/icons/external.svg'
// import myPortImg from '../../assets/images/my-port-web.png'
import "./Works.css"
export const Works = () => {
  return (
    <div className='works-container'>
        <Navbar logo={logop} fill = '#4831d4' />
        <div className="works">
            <header className='works-header'>
                <h1>
                    /
                    <span className='works-header-span'>works</span>
                    .
                </h1>
                <p>Selected projects I've worked on in the past.</p>
            </header>
            <div className="works-projects">
                <div className="project-card">
                    <div className="project-card-image">
                        <img src={logop} alt="portimg" />
                    </div>
                    <div className="project-card-details">
                        <p className='project-card-name'>
                            Personal Website
                        </p>
                        <div className="project-card-links">
                            <a href="https://github.com/Oladimeji-Dev/" target="_blank" rel="noopener noreferrer" >
                                <img src={gitIcon}alt="gitimage" />
                            </a>
                            <a href="https://oladimeji-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" >
                                <img src={externalIcon}alt="exterimage" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="project-card">
                    <div className="project-card-image">
                        <img src={logop} alt="portimg" />
                    </div>
                    <div className="project-card-details">
                        <p className='project-card-name'>
                            Personal Website
                        </p>
                        <div className="project-card-links">
                            <a href="https://github.com/Oladimeji-Dev/" target="_blank" rel="noopener noreferrer" >
                                <img src={gitIcon}alt="gitimage" />
                            </a>
                            <a href="https://oladimeji-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" >
                                <img src={externalIcon}alt="exterimage" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-image">
                        <img src={logop} alt="portimg" />
                    </div>
                    <div className="project-card-details">
                        <p className='project-card-name'>
                            Personal Website
                        </p>
                        <div className="project-card-links">
                            <a href="https://github.com/Oladimeji-Dev/" target="_blank" rel="noopener noreferrer" >
                                <img src={gitIcon}alt="gitimage" />
                            </a>
                            <a href="https://oladimeji-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" >
                                <img src={externalIcon}alt="exterimage" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-image">
                        <img src={logop} alt="portimg" />
                    </div>
                    <div className="project-card-details">
                        <p className='project-card-name'>
                            Personal Website
                        </p>
                        <div className="project-card-links">
                            <a href="https://github.com/Oladimeji-Dev/" target="_blank" rel="noopener noreferrer" >
                                <img src={gitIcon}alt="gitimage" />
                            </a>
                            <a href="https://oladimeji-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" >
                                <img src={externalIcon}alt="exterimage" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-image">
                        <img src={logop} alt="portimg" />
                    </div>
                    <div className="project-card-details">
                        <p className='project-card-name'>
                            Personal Website
                        </p>
                        <div className="project-card-links">
                            <a href="https://github.com/Oladimeji-Dev/" target="_blank" rel="noopener noreferrer" >
                                <img src={gitIcon}alt="gitimage" />
                            </a>
                            <a href="https://oladimeji-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" >
                                <img src={externalIcon}alt="exterimage" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-image">
                        <img src={logop} alt="portimg" />
                    </div>
                    <div className="project-card-details">
                        <p className='project-card-name'>
                            Personal Website
                        </p>
                        <div className="project-card-links">
                            <a href="https://github.com/Oladimeji-Dev/" target="_blank" rel="noopener noreferrer" >
                                <img src={gitIcon}alt="gitimage" />
                            </a>
                            <a href="https://oladimeji-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" >
                                <img src={externalIcon}alt="exterimage" />
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        <Footer shownav = {false} />
    </div>
  )
}
