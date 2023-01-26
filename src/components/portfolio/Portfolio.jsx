import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
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
          <h3>BoredBot</h3>
          <div className='portfolio__item-cta'>
          <a href = "https://github.com/EmmaBin/boredbot-api" className = 'btn' target='_blank'>Github</a>
          <a href = "https://deluxe-snickerdoodle-3e392b.netlify.app/" className = 'btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Color Scheme Generator</h3>
          <div className='portfolio__item-cta'>
          <a href = "https://github.com/EmmaBin/color-scheme-generator" className = 'btn' target='_blank'>Github</a>
          <a href = "https://super-lily-3287d2.netlify.app/" className = 'btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>Meme Generator in React</h3>
          <div className='portfolio__item-cta'>
          <a href = "https://github.com/EmmaBin/react-meme-generator" className = 'btn' target='_blank'>Github</a>
          <a href = "https://imaginative-youtiao-eb6869.netlify.app/" className = 'btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG7} alt="" />
          </div>
          <h3>Quiz in React</h3>
          <div className='portfolio__item-cta'>
          <a href = "https://github.com/EmmaBin/quiz-react" className = 'btn' target='_blank'>Github</a>
          <a href = "https://lambent-starlight-872cbf.netlify.app/" className = 'btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>
       

     

      </div>
    </section>
  )
}

export default Portfolio