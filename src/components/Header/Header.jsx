import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll effektini kuzatish
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

    // Tilni almashtirish funksiyasi
    const handleChangeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

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
                        <span className="logo-icon"></span>
                        <span className="logo-text">Dizenfeksiya</span>
                    </a>

                    {/* Menyu */}
                    <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="header-list">
                            <li className="header-item">
                                <a href="#about" className="header-item-link" onClick={closeMenu}>
                                    {t("header.about")}
                                </a>
                            </li>
                            <li className="header-item">
                                <a href="#services" className="header-item-link" onClick={closeMenu}>
                                    {t("header.services")}
                                </a>
                            </li>
                            <li className="header-item">
                                <a href="#advantages" className="header-item-link" onClick={closeMenu}>
                                    {t("header.advantages")}
                                </a>
                            </li>
                            <li className="header-item">
                                <a href="#faq" className="header-item-link" onClick={closeMenu}>
                                    {t("header.faq")}
                                </a>
                            </li>
                        </ul>

                        {/* Mobil qurilmadagi til va tugma */}
                        <div className="mobile-actions">
                            <select
                                className="header-select"
                                value={i18n.language}
                                onChange={handleChangeLanguage}
                            >
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                            <a href="#contact" className="header-btn" onClick={closeMenu}>
                                {t("header.contact")}
                            </a>
                        </div>
                    </nav>

                    {/* Desktop o'ng tomon elementlari */}
                    <div className="header-actions">
                        <select
                            className="header-select"
                            value={i18n.language}
                            onChange={handleChangeLanguage}
                        >
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                        <a href="#contact" className="header-btn">
                            {t("header.contact")}
                        </a>
                    </div>