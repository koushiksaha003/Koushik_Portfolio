import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
const Footer=()=>{
    return(
       <footer id='footer'>
        <a href="#" className='footer_logo'>KOUSHIK</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#academic">Academic</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_social">
            <a href="https://facebook.com"><FaFacebookF/></a>
            <a href="https://instagram.com"><FiInstagram/></a>
            <a href="https://twitter.com"><FaTwitter/></a>
           
        </div>
        <div className="copyright">
            <small> Made By KOUSHIK</small>
        </div>
       </footer>
    )
}
export default Footer