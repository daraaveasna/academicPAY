import React from 'react'
import { useRef } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import "./main.css"

const Navbar = () => {
    const navRef = useRef();

    const shownavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }
  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">My Work</a>
            <a href="/#">Blog</a>
            <a href="/#">About</a>
            <button className='nav-btn nav-close-btn' onClick={shownavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={shownavbar}> 
            <FaBars/>
        </button>
    </header>
  )
}

export default Navbar