import React, { useState, useEffect } from 'react';
import { navLinks } from "../home/Data"; 
import "./header.css";

const Header = () => {
    /* =============== Change Background Header =============== */
    const [scrollHeader, setScrollHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) setScrollHeader(true);
            else setScrollHeader(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* =============== Toggle Menu =============== */
    const [toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

    return (
        <header className={scrollHeader ? "header scroll-header" : "header"}>
            <nav className="nav container">
                <a href="#home" className="nav__logo">श</a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        {navLinks.map((link, index) => {
                            return (
                                <li className="nav__item" key={index}>
                                    <a 
                                        href={link.hash} 
                                        onClick={() => {
                                            setActiveNav(link.hash);
                                            showMenu(false); 
                                        }} 
                                        className={activeNav === link.hash ? "nav__link active-link" : "nav__link"}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                        
                        <li className="nav__item">
                            <a href="#resume" className="nav__link resume-btn">
                                Resume
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;