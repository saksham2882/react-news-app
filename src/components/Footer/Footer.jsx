import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css'

// eslint-disable-next-line react/display-name
const Footer = React.memo(() => {
    return (
        <>
            <footer>
                <div className="social-icons">
                    <a href="/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
                <p>&copy; Copyright 2025, Owner Saksham Agrahari. All Rights are Reserved.</p>
            </footer>
        </>
    )
})

export default Footer
