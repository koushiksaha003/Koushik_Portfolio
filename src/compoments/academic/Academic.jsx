import React from 'react'
import './Academic.css'
import {BiCheckDouble} from 'react-icons/bi'
const Academic=()=>{
    return(
      <section id='academic'>
        <h5>My Academic</h5>
        <h5>Background</h5>

        <div className="container academic_container">
            <article className='academic'>
                <div className="academic_head">
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
            {/* BASIC Education */}
            <article className='academic'>
                <div className="academic_head">
                    <h3>programming</h3>
                </div>
                <ul className='academic_list'>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>C</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>C++</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Python</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Data Structures and Algorithms</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Design and Analysis of Algorithms.</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p> Databases and SQL </p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Operating system</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Object-oriented programming</p>
                    </li>
                   
                    
                </ul>
            </article>
            {/* PROGRAMMING */}
            <article className='academic'>
                <div className="academic_head">
                    <h3>Interest</h3>
                </div>
                <ul className='academic_list'>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Cyber Security</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Stock Market </p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Photo Editing</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Reading novels</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Playing Cricket</p>
                    </li>
                    <li>
                        <BiCheckDouble className='academic_icon'/>
                        <p>Travelling</p>
                    </li>
                    
                </ul>
            </article>
        </div>
      </section>
    )
}

export default Academic