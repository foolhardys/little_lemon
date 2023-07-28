import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/Pics/restaurant.jpg'

const AboutBanner = () => {
    return (
        <section className='section background-primary'>
            <div className="banner">
                <div className="banner-item">
                    <h2 className='margin-top yellow margin-bottom'>About Little Lemon</h2>
                    <p className='margin-top'>Welcome to <strong>Little Lemon</strong>, the <strong> Italian food paradise!</strong> Our charming restaurant invites you to savor a symphony of authentic flavors from Italy. Revel in the art of Italian cooking as our skilled chefs craft each dish with love. Delight in the warm ambiance while relishing mouthwatering pasta, pizzas, and more. A zestful dining experience awaits you! <strong>Buon appetito!</strong>
                        <br /><br />
                        At Little Lemon, we redefine the essence of a premium dining experience. Immerse yourself in an elegant ambiance that exudes sophistication and warmth. Our attentive staff ensures every moment is filled with comfort and care. Indulge in a divine feast of Italian delicacies, including the luxurious <strong>Truffle Risotto</strong>, the savory <strong> Osso Buco</strong>, and the delectable <strong>Tiramisu</strong> . Elevate your taste buds with our curated wine selection, perfectly complementing each sumptuous dish. Escape to a world of culinary excellence and create cherished memories with us. Buon appetito! 🍋🇮🇹</p>
                    <Link to='reservations' className='btn margin-top-btn'>Reserve a Table</Link>

                </div>
                <div className="banner-img">
                    <img src={image} alt='Spring rolls' />
                    <Link to='menu' className='btn'>Menu</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner