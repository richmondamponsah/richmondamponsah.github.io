import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
{
    id: 1,
    images: IMG1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com/',
    demo: 'https://demo'
},
{
    id: 2,
    images: IMG2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com/',
    demo: 'https://demo'
},
{
    id: 3,
    images: IMG3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com/',
    demo: 'https://demo'
},
{
    id: 4,
    images: IMG4,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com/',
    demo: 'https://demo'
},
{
    id: 5,
    images: IMG5,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com/',
    demo: 'https://demo'
},
{
    id: 6,
    images: IMG6,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com/',
    demo: 'https://demo'
},
]











const portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {
                data.map(({id, images, title, github, demo}) => {
                    return (
                        <article key={id} className="portfolio__item">
                         <div className="portfolio__item-image">
                             <img src={images} alt={title} />
                             <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                             <a href={github} className='btn' target='_blank' rel="noreferrer" >View In Github</a>
                             <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >View live Demo</a>
                       </div>
                    </div>
                </article>
                )
            })
        }
     </div>
 </section>
  )
}

export default portfolio