/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import './Navbar.css'

const Navbar = ({ filterNews }) => {

    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    }


    return (
        <>
            <nav>
                <div className="logo">
                    <h1>SR News Times</h1>
                    <img src="logo.png" alt="SR News Times" />
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </div>

                <ul className={show ? "show" : ""}>
                    <li><button onClick={() => { filterNews("everything"); setShow(false); }}>Everything</button></li>
                    <li><button onClick={() => { filterNews("general"); setShow(false); }}>General</button></li>
                    <li><button onClick={() => { filterNews("business"); setShow(false); }}>Business</button></li>
                    <li><button onClick={() => { filterNews("entertainment"); setShow(false); }}>Entertainment</button></li>
                    <li><button onClick={() => { filterNews("health"); setShow(false); }}>Health</button></li>
                    <li><button onClick={() => { filterNews("science"); setShow(false); }}>Science</button></li>
                    <li><button onClick={() => { filterNews("sports"); setShow(false); }}>Sports</button></li>
                    <li><button onClick={() => { filterNews("technology"); setShow(false); }}>Technology</button></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar