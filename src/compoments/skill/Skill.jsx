import React from 'react'
import './Skill.css'
import{AiFillHtml5}from 'react-icons/ai'
import{FaCss3Alt}from 'react-icons/fa'
import{DiJavascript1}from 'react-icons/di'
import{FaBootstrap}from 'react-icons/fa'
import{FaReact}from 'react-icons/fa'
import{FaNodeJs}from 'react-icons/fa'
import{TbBrandNextjs}from 'react-icons/tb'
import{DiMongodb}from 'react-icons/di'
import{SiSocketdotio}from 'react-icons/si'
const skill = () => {
  return (
    <section id='skill'>
     <h5>What Skill I Have</h5>
     <h2>MY Experience</h2>
     <div className="container skill_container">
        <div className="skill_frontend">
            <h3>Frontend Devlopment</h3>
              <div className="skill_content">
                <article className='skill_detail'>
                    <AiFillHtml5 className='skill_detail-icon'/>
                    <div>
                       <h4>HTML</h4>
                       <small className='text_light'>Experienced</small>
                       </div>
                </article> 
                <article className='skill_detail'>
                    <FaCss3Alt className='skill_detail-icon'/>
                    <div>
                    <h4>CSS</h4>
                    <small className='text_light'>Experienced</small>
                    </div>
                </article>
                <article className='skill_detail'>
                    <DiJavascript1 className='skill_detail-icon'/>
                    <div>
                    <h4>JavaScript</h4>
                    <small className='text_light'>Moderate</small>
                    </div>
                </article> 
                <article className='skill_detail'>
                    <FaBootstrap className='skill_detail-icon'/>
                    <div>
                    <h4>BootStrap</h4>
                    <small className='text_light'>Experienced</small>
                    </div>
                </article>
                <article className='skill_detail'>
                    <FaReact className='skill_detail-icon'/>
                    <div>
                    <h4>React</h4>
                    <small className='text_light'>Experienced</small>
                    </div>
                </article>
            </div>
        </div>
        <div className="skill_backend">
        <h3>Backend Devlopment</h3>
            <div className="skill_content">
                <article className='skill_detail'>
                    <FaNodeJs className='skill_detail-icon'/>
                    <div>
                    <h4>NodeJs</h4>
                    <small className='text_light'>Moderate</small>
                    </div>
                </article> 
                <article className='skill_detail'>
                    <TbBrandNextjs className='skill_detail-icon'/>
                    <div>
                        <h4>nextjs</h4>
                    <small className='text_light'>Basic idea</small>
                    </div>
                </article>
                <article className='skill_detail'>
                    <DiMongodb className='skill_detail-icon'/>
                    <div><h4>mongodb</h4>
                    <small className='text_light'>Moderate</small> </div>
                </article> 
                <article className='skill_detail'>
                    <SiSocketdotio className='skill_detail-icon'/>
                    <div>
                     <h4>Socket Oi</h4>
                    <small className='text_light'>Moderate</small> 
                    </div>
                </article>
            </div>
        </div>
     </div>
    </section>
  )
}

export default skill 
