import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import logo from './images/log.png';
import joy from './images/locatsion.png';
import call from './images/phone.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          
          <div className="footer-top">
            <a href="#" className="footer-logo">
              <img src={logo} alt="Logo" />
            </a>

            <div className="footer-contacts">
              <div className="footer-contact-item">
                <img src={joy} alt="Manzil" className="footer-contact-icon" />
                <p className="footer-contact-text">{t("footer.boxText")}</p>
              </div>

              <div className="footer-contact-item">
                <img src={call} alt="Telefon" className="footer-contact-icon" />
                <a href="tel:+998990000999" className="footer-contact-link">
                  {t("footer.wrapperText")}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-socials">
              <a 
                href="https://t.me/Wep_Palkovnik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
              >
                Telegram ↗
              </a>

              <a 
                href="https://www.linkedin.com/in/ro-zimurod-shoaxmatov-95a43a401/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
              >
                LinkedIn ↗
              </a>

              <a 
                href="https://youtu.be/3U4CARSJFIc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
              >
                YouTube ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;