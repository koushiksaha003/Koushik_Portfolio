import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{AiOutlineGithub} from 'react-icons/ai'
import{AiOutlineDribbbleSquare} from 'react-icons/ai'
const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><AiOutlineGithub /></a>
        <a href="https://dribbbleyc.com" target="_blank"><AiOutlineDribbbleSquare/></a>
      
    </div>
  )
}

export default HeaderSocial
