import React, { useState, useEffect } from 'react';
import { navLinks } from "../home/Data";
import "./header.css";

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);
    const [toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

    useEffect(() => {
        const handleScroll = () => setScrollHeader(window.scrollY >= 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={scrollHeader ? "header scroll-header" : "header"}>
            <nav className="nav container">
                <a href="#home" className="nav__logo" aria-label="Shivaji Sahani home">श</a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        {navLinks.map((link) => (
                            <li className="nav__item" key={link.hash}>
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
                        ))}
                        <li className="nav__item">
                            <a
                                href="mailto:shivajisahani01@gmail.com"
                                className="nav__link resume-btn"
                                onClick={() => showMenu(false)}
                            >
                                Email me
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(false)} aria-label="Close menu"></i>
                </div>

                <button className="nav__toggle" type="button" onClick={() => showMenu(!toggle)} aria-label="Toggle navigation">
                    <i className="uil uil-apps"></i>
                </button>
            </nav>
        </header>
    );
};

export default Header;