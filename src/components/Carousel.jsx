import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import image1 from '../assets/Pics/Mario and Adrian A.jpg'
import image2 from '../assets/Pics/Mario and Adrian b.jpg'
import image3 from '../assets/Pics/restauranfood.jpg'
import image4 from '../assets/Pics/restaurant chef B.jpg'
import image5 from '../assets/Pics/restaurant.jpg'



export const longList = [
  {
    id: 1,
    image: image1,
    name: 'Mario',
  },
  {
    id: 2,
    image: image2,
    name: 'Adrian',
    title: 'regular guy',
  },
  {
    id: 3,
    image: image3,
    name: 'Food',
  },
  {
    id: 4,
    image: image4,
    name: 'Chef',
  },
  {
    id: 5,
    image: image5,
    name: 'Interior',
  }
];


const Carousel = () => {

  const [people, setPeople] = useState(longList)
  const [currentPerson, setCurrentPerson] = useState(0)

  const prevSlide = () => {

    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length
      return result
    })
  }

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length
      return result
    })
  }


  return (
    <section className="section">
      <section className='slider-container'>
        {people.map((person, personIndex) => {
          const { id, image, name } = person;
          return (
            <article className='slide' style={{ transform: `translateX(${100 * (personIndex - currentPerson)}%)` }} key={id}>
              <div className='banner-img'>
                <img src={image} alt='' className='shadow'/>
                <h3 className='yellow'>{name}</h3>
              </div>
            </article>
          )

        })}
        <button
          type='button '
          className='prev'
          onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button
          type='button '
          className='next'
          onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    </section>
  )
}

export default Carousel