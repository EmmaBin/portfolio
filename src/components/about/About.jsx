import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className = "container about__container">
        <div className = "about__me">
          <div className = "about__me-image">
            <img src={ME} alt="About Image" />


          </div>

        </div>

        <div className="about__content">

          <div className="about__cards">

            <article className= 'about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <p>3 years Teaching Experience</p>
                <p>3 years Flight Attendant</p>

            </article>

            <article className= 'about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <p>Full Stack App</p>
                <p>Frontend App</p>
            </article>
        </div>

        <p>
          I'm a software engineer based in the Bay Area, I graduated from Hackbright coding bootcamp recently and I'm looking for internship or apprenticeship opportunities.
          Besides work, I love traveling, cooking, and watching crime documentaries. I find fixing bugs is similar to the job of a detective.
        </p>

        <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>


      </div>


    </section>
  )
}

export default About