import './Navbar.css'
import { NavLink } from 'react-router-dom'
import myPic from '../assets/MyPic.jpg'

function navItemClass({ isActive }) {
    return `navbar__item${isActive ? ' navbar__item--active' : ''}`
}

function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => `navbar__brand${isActive ? ' navbar__brand--active' : ''}`}>
                <img className="navbar__avatar" src={myPic} alt="Omar Nagy" />
                <span className="navbar__name">Omar Nagy</span>
            </NavLink>

            <div className="navbar__nav">
                <NavLink to="/about" className={navItemClass}>
                    <i className="fa-solid fa-user"></i>
                    <span>About</span>
                </NavLink>
                <NavLink to="/projects" className={navItemClass}>
                    <i className="fa-solid fa-diagram-project"></i>
                    <span>Projects</span>
                </NavLink>
                <button type="button" onClick={scrollToContact} className="navbar__item">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Contact</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
