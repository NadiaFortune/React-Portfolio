import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

function Navbar() {
    const [navActive, setNavActive] = useState
    (false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window, innerWidth <= 500) {
                closeMenu
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu
        }
    }, [])

    //if navbar is active or not - below will show
    return (
        <nav className={`navbar ${navActive ? "active" : ""} ` }> 
            <div>
                < img src="./img/logo.svg" alt="Logo" />
            </div>
            <a className={`nav_hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}>

                <span className='nav_hamburger_line'></span>
                <span className='nav_hamburger_line'></span>
                <span className='nav_hamburger_line'></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
            <ul>
                <li>
                    <Link 
                    onClick={closeMenu} activeClass='navBar--active-content' 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='HeaderSection'
                    className='navbar--content'>Home
                    </Link>
                </li>
                <li>
                    <Link 
                    onClick={closeMenu} activeClass='navBar--active-content' 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='Portfolio'
                    className='navbar--content'>Portfolio
                    </Link>
                </li>
                <li>
                    <Link 
                    onClick={closeMenu} activeClass='navBar--active-content' 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='AboutMe'
                    className='navbar--content'>About Me
                    </Link>
                </li>
                <li>
                    <Link 
                    onClick={closeMenu} activeClass='navBar--active-content' 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='Testimonials'
                    className='navbar--content'>Testimonials
                    </Link>
                </li>
            </ul>
            </div>

        </nav>
    )
}

export default Navbar