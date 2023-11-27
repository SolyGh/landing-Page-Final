import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillCCircleFill, BsFillPlayBtnFill } from 'react-icons/bs';
const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt=''/>
        </div>
      <div  className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt=''/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
             <h1 className='primary-heading'>
                Food is an important part of balanced life كل انت بس
             </h1>
             <p className='primary-text'>
                اي كلام فاضي المهم تاكل
             </p>
             <p className='primary-text'>
                اي كلام فاضي المهم تاكل
             </p>
             <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                  {" "}  
                    <BsFillCCircleFill/>Watch video</button>
             </div>
        </div>
    </div>
  )
}

export default About;