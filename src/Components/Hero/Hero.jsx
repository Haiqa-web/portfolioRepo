import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
       <div className="img-container">
         <img src={profile_img} alt="" />
       </div>
        <h1><span>I'm Haiqa Khan, </span>frontend developer based in India.</h1>
        <p>I am a passionate web developer from Jharkhand, India. I build modern, responsive web applications using React.js and Vite, focusing on clean code, smooth user experiences, and interactive designs. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero