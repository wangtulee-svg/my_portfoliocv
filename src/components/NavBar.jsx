import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants/index.js'
import ThemeToggle from './ThemeToggle.jsx';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
         const isScrolled = window.scrollY > 10;
         setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner'>
            <a className='logo' href="#home">
                Lee | 3Cs2
            </a>

            <nav className='desktop'>
              <ul>
                {/* About Me link added */}
                <li className='group'>
                  <a href="#hero">
                    <span>About Me</span>
                    <span className='underline' />
                  </a>
                </li>
                {navLinks.map(({ link, name}) => (
                    <li key={name} className='group'>
                      <a href={link}>
                        <span>{name}</span>
                        <span className='underline' />
                      </a>
                    </li>
                ))}
              </ul>
            </nav>

          <div className='flex items-center gap-5'>
            <ThemeToggle />
            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                   <span>Contact Me</span>
                </div>
            </a>
          </div>
        </div>
    </header>
  )
}

export default NavBar