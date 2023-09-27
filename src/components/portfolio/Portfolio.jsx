import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import skyfall from '../../assets/skyfall.png'
import SPEC from '../../assets/spec.png'
import dimsum from '../../assets/dumsum.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={skyfall} alt="project-screenshot" />
          </div>
          <h3>Skyfall</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/chingu-voyages/v45-tier2-team-27" className='btn' target='_blank'>Github</a>
            <a href="https://team27-skyfall.netlify.app/" className='btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={SPEC} alt="project-screenshot" />
          </div>
          <h3>Contracting Work</h3>
          <div className='portfolio__item-cta'>
            <a href="https://www.specollective.org/home/" className='btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={dimsum} alt="project-screenshot" />
          </div>
          <h3>Dim Sum Guru</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/EmmaBin/dimsum_guru" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="project-screenshot" />
            <img src={IMG1} alt="project-screenshot" />
          </div>
          <h3>My Travelogue</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/EmmaBin/travel-website" className='btn' target='_blank'>Github</a>
            <a href="https://www.youtube.com/watch?v=SzV_SUGsvzE" className='btn btn-primary' target='_blank'>Youtube Video</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="project-screenshot" />
          </div>
          <h3>Restaurant Ordering App</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/EmmaBin/restaurant-ordering-app" className='btn' target='_blank'>Github</a>
            <a href="https://fastidious-vacherin-532667.netlify.app/" className='btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="project-screenshot" />
          </div>
          <h3>Movie Watchlist App</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/EmmaBin/movie-watchlist" className='btn' target='_blank'>Github</a>
            <a href="https://jazzy-sawine-5d9be6.netlify.app/" className='btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="project-screenshot" />
          </div>
          <h3>Color Scheme Generator</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/EmmaBin/color-scheme-generator" className='btn' target='_blank'>Github</a>
            <a href="https://super-lily-3287d2.netlify.app/" className='btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="project-screenshot" />
          </div>
          <h3>Meme Generator in React</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/EmmaBin/react-meme-generator" className='btn' target='_blank'>Github</a>
            <a href="https://imaginative-youtiao-eb6869.netlify.app/" className='btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG7} alt="project-screenshot" />
          </div>
          <h3>Quiz in React</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/EmmaBin/quiz-react" className='btn' target='_blank'>Github</a>
            <a href="https://endearing-peony-63758b.netlify.app/" className='btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>




      </div>
    </section>
  )
}

export default Portfolio