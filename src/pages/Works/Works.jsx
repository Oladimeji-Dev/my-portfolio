import React from 'react'
import { Footer } from '../../component/Footer/Footer'
import { Navbar } from '../../component/Navbar/Navbar'
import logop from '../../assets/images/002_txt.png'
import "./Works.css"
export const Works = () => {
  return (
    <div className='works-container'>
        <Navbar logo={logop} fill = '#4831d4' />
        <div className="works">
            <header className='works-header'>
                <h3>/<span>work</span>.</h3>
                <p>Selected projects I've worked on in the past.</p>
            </header>
            <div className="works-projects">
                <div className="project-card">
                    <div className="project-card-image">
                        --image---
                    </div>
                    <div className="project-card-details">
                        <p className='project-card-name'>
                            project name
                        </p>
                        <a href="#1" target="_blank" rel="noopener noreferrer" >project link</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer shownav = {false} />
    </div>
  )
}
