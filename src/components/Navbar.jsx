import './Navbar.css'
import myPic from '../assets/MyPic.jpg'
import { useState } from 'react'

function Navbar({ picSelected, setPicSelected }) {
    return (
        <nav className="navbar">
            <button
                className={`navbar__brand${picSelected ? ' navbar__brand--active' : ''}`}
                onClick={() => setPicSelected(!picSelected)}
            >
                <img className="navbar__avatar" src={myPic} alt="Omar Nagy" />
                <span className="navbar__name">Omar Nagy</span>
            </button>

        <div className="navbar__nav">
            <button onClick={() => setPicSelected(true)} className="navbar__item">
            <i className="fa-solid fa-user"></i>
            <span>About</span>
            </button>
            <a href="#projects" className="navbar__item">
            <i className="fa-solid fa-diagram-project"></i>
            <span>Projects</span>
            </a>
            <a href="#contact" className="navbar__item">
            <i className="fa-solid fa-envelope"></i>
            <span>Contact</span>
            </a>
        </div>
        </nav>
    )
}

export default Navbar
