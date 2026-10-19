import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll bo'lganda headerga soya va ixchamlik berish
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-container">
                    {/* Logo */}
                    <a href="#" className="header-logo" onClick={closeMenu}>
                        {/* O'zingizning logotipingiz bo'lsa rasmni qo'ying yoki quyidagi matnli logotipdan foydalaning */}
                        <span className="logo-icon"></span>
                        <span className="logo-text">Dizenfeksiya</span>
                    </a>

                    {/* Navigatsiya menyusi */}
                    <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="header-list">
                            <li className="header-item">
                                <a href="#about" className="header-item-link" onClick={closeMenu}>
                                    Biz haqimizda
                                </a>
                            </li>
                            <li className="header-item">
                                <a href="#services" className="header-item-link" onClick={closeMenu}>
                                    Xizmatlar
                                </a>
                            </li>
                            <li className="header-item">
                                <a href="#advantages" className="header-item-link" onClick={closeMenu}>
                                    Afzalliklar
                                </a>
                            </li>
                            <li className="header-item">
                                <a href="#faq" className="header-item-link" onClick={closeMenu}>
                                    FAQ
                                </a>
                            </li>
                        </ul>

                        {/* Mobil qurilmalarda menyu ichida ko'rinadigan qism */}
                        <div className="mobile-actions">
                            <select className="header-select">
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                            <a href="#contact" className="header-btn" onClick={closeMenu}>
                                Bog'lanish
                            </a>
                        </div>
                    </nav>

                    {/* Desktop o'ng tomon elementlari */}
                    <div className="header-actions">
                        <select className="header-select">
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                        <a href="#contact" className="header-btn">
                            Bog'lanish
                        </a>
                    </div>

                    {/* Burger Tugmasi */}
                    <button
                        className={`burger-btn ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Menyu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;