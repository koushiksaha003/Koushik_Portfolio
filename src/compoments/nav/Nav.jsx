import React from 'react'
import './Nav.css'
import {FaHome} from 'react-icons/fa'
import{BiUser}  from 'react-icons/bi'
import{GiBookmarklet} from 'react-icons/gi'
import{TbMessageDots} from 'react-icons/tb'
import {HiAcademicCap} from 'react-icons/hi'
import { useState } from 'react'
const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#"onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active':''}><FaHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}className={activeNav==='#about'? 'active':''}><BiUser/></a>
      <a href="#academic"onClick={()=>setActiveNav('#academic')} className={activeNav==='#academic'? 'active':''}><HiAcademicCap/></a>
      <a href="#skill"onClick={()=>setActiveNav('#skill')} className={activeNav==='#skill'? 'active':''}><GiBookmarklet/></a>
      <a href="#contact"onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active':''}><TbMessageDots/></a>

    </nav>
  )
}

export default Nav
