import React from 'react'
import './About.css'
import ME from '../../content/ME.jpg'
import{BiBookReader}from 'react-icons/bi'
import{IoIosSchool}from 'react-icons/io'
import {RiComputerFill}from'react-icons/ri'
const about = () => {
  return (
    <section id='about'>
      <h2 className='text' >About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
             <BiBookReader className='about_icon'/> 
              <h5>Schooling</h5>
              <small>Ramakrishana Mission</small>
            </article>

            <article className='about_card'>
              <IoIosSchool className='about_icon'/>
              <h5>College</h5>
              <small>IIIT Bhubaneswar</small>
            </article>

            <article className='about_card'>
              < RiComputerFill className='about_icon'/>
              <h5>Branch</h5>
              <small>Computer Engineering</small>
            </article>
          </div>
          <p>I am Koushik Saha. I am 20 years old. Currently, I am pursuing my B.tech from IIIT Bhubaneswar in Computer Engineering. So right now, I am a MERN stack Developer. But want to acquire a lot more knowledge in this field. I am also interested in some new emerging technology like Machine learning,Web3 technology.</p>
          <a href="#contact"className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default about
