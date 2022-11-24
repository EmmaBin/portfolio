import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import {BiBookOpen} from 'react-icons/bi'
import {AiOutlineSnippets} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      
      <a href='#' onClick ={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><HiHome /></a>
      <a href='#about' onClick ={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaUserAlt /></a>
      <a href='#experience' onClick ={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBookOpen /></a>
      <a href='#portfolio' onClick ={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><AiOutlineSnippets /></a>
      <a href='#contact' onClick ={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiFillContacts /></a> 

    </nav>
  )
}

export default Nav