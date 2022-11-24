import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.JPG'
import Headersocials from './Headersocials'

const Header = () => {
  return (
    <header>
      <div className ="container header__container">
        <h5>Hello I'm</h5>
        <h1> Bin Ma (Emma)</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />
        <Headersocials />

        <div className='me'>
          <img style={{width: "600px", height: "500px"}} src ={ME} alt="me" />
        </div>

        <a href = "#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header