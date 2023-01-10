import React from 'react'
import './TechnicalSkills.css'
import logop from '../../assets/images/cube_002.png'
import { skills } from '../../skills'
import { Link } from 'react-router-dom'
import { Navbar } from '../../component/SecNavbar/Navbar'
export const TechnicalSkills = ({toggle,handleToggle}) => {
  return (
    <section className="three">
        <Navbar fill='#5034d4'logo={logop} toggle={toggle} handleToggle ={handleToggle} />
        <div className="knowledge">
            <div className="knowledge-projects">
                <h1>
                    I build & Program stuff
                </h1>
                <p>
                    Open source projects, <br/>web apps and experimentals.
                </p>
                <Link to='/works' className='btn btn-works'>SEE MY WORKS ----</Link>
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
  )
}
