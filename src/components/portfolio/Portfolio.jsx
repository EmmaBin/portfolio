import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className ='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
            <img src={IMG1} alt="" />
          </div>
          <h3>My Travelogue</h3>
          <div className='portfolio__item-cta'>
          <a href = "https://github.com/EmmaBin/travel-website" className = 'btn' target='_blank'>Github</a>
          <a href = "https://www.youtube.com/watch?v=SzV_SUGsvzE" className = 'btn btn-primary' target='_blank'>Youtube Video</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Restaurant Ordering App</h3>
          <div className='portfolio__item-cta'>
          <a href = "https://github.com/EmmaBin/restaurant-ordering-app" className = 'btn' target='_blank'>Github</a>
          <a href = "https://fastidious-vacherin-532667.netlify.app/" className = 'btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Oldgram</h3>
          <div className='portfolio__item-cta'>
          <a href = "https://github.com/EmmaBin/oldgram" className = 'btn' target='_blank'>Github</a>
          <a href = "https://jovial-squirrel-99d690.netlify.app/" className = 'btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

       

     

      </div>
    </section>
  )
}

export default Portfolio