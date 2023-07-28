import React from 'react'
import dish from '../assets/Pics/restauranfood.jpg'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <section className='section background-primary'>
      <div className="banner">
        <div className="banner-item">
          <h1 className='margin-top'>Little Lemon</h1>
          <h3 className='margin-top heading-banner'>Mumbai</h3>
          <p className='margin-top'>
            Indulge in a delightful Italian culinary journey at Little Lemon! Savor the authentic flavors of Italy in a cozy ambiance, where every bite is a burst of zestful bliss! Buon appetito! 🍋🇮🇹
          </p>
          <Link to='reservations' className='btn margin-top-btn'>Reserve a Table</Link>

        </div>
        <div className="banner-img">
          <img src={dish} alt='Spring rolls' />
          <Link to='menu' className='btn'>Menu</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner