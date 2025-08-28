import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img1 from '../../assets/profile_img1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img1} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m Haiqa, a passionate frontend developer from Jharkhand, India. I specialize in building interactive and responsive web applications using React.js and Vite, with a focus on clean, maintainable code and modern design practices.</p>
                    <p>My current portfolio project showcases my skills in React, Tailwind CSS, and integrating APIs to create dynamic and engaging web applications. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Reac JS</p><hr style={{width:"70%"}} />
                    </div><div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}} />
                    </div><div className="about-skill">
                        <p>Next JS</p><hr style={{width:"50%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1.5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About