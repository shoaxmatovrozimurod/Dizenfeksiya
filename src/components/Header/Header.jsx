import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
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
          <a href="#" className="header-logo" onClick={closeMenu}>
            <span className="logo-icon"></span>
            <span className="logo-text">Dizenfeksiya</span>
          </a>

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