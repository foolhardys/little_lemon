import React from 'react';
import logo from '../assets/little lemon logos/logo.png'
import footerimg from '../assets/Pics/restaurant.jpg'
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const Footer = () => {


    const socialLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com/', logo: <FaFacebook /> },
        { name: 'Youtube', url: 'https://www.youtube.com/', logo: <FaYoutube /> },
        { name: 'Instagram', url: 'https://www.instagram.com/', logo: <FaInstagram /> },
    ];


    const phoneNumber = '00222789395';
    const address = 'D-53 Vashi Plaza, Sec.17, Krishi Bazaar, Mumbai';

    return (
        <footer className="section background-primary">
            <div className="banner banner-footer">
                <div className="footer__logo">
                    <img src={logo} alt="Company Logo" className='logo' />
                </div>

                <div className="footer__social">
                    <ul>
                        {socialLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='footer-para'>
                    <p><strong>Phone</strong> :<br />{phoneNumber}</p>
                    <p><strong>Address</strong> :<br />{address}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;