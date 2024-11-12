import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../content/me3.png'
import HeaderSocial from './HeaderSocial' 
const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>KOUSHIK</h1>
            <h5 className="text-light">MERNstack Developer</h5>
            <CTA/>
            <HeaderSocial/>

            <div className="me">
              <img src={ME}alt="me" />
            </div>
            <a href="#footer" className='scroll_down'>Scroll down</a>
        </div>
    </header>
  )
}

export default Header
