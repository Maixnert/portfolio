import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-maixner-10485624a" target="_blank"><BsLinkedin/></a>
        <a href="https://www.facebook.com/maixnert/" target="_blank"><AiFillFacebook/></a>
        <a href="https://dribbble.com/msjor" target="_blank"><FiDribbble/></a>
        <a href="https://www.instagram.com/maixnert/" target="_blank"><AiOutlineInstagram/></a>

    </div>
  )
}

export default HeaderSocials