import React from 'react'
import './Project.css' 
import {BiCheckDouble} from 'react-icons/bi'

const Project = () => {
  return (
    <div>
    <section id='project'>
    <h5>My Academic</h5>
    <h5>Background</h5>
    <div className="container project">
       <article className='projects'>
                <div className="project_head">
                    <h3>Basic Education</h3>
                </div>
                <ul className='academic_list'>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Done my 10th from Ramakrishana Mission </p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Got 89.14% in 10th Board Exam</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Done my 12th from ramakrishana Mission</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Done my 12th with Science (PCMB)</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Got 89.60% in 12th Board Exam </p>
                    </li>
                    
                </ul>
            </article>
    </div>
    </section>
    </div>
  )
}

export default Project
