import React from 'react';
import { useTranslation } from 'react-i18next';
import cirlceImg from './images/img.png'; 
import fonImg from './images/img2.png';
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation(); 

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-container">
            
          <div className="hero-box">
            <h1 className="hero-box-title">{t("hero.title")}</h1>
            <p className="hero-box-text">{t("hero.text")}</p>
            <button className="hero-box-btn">{t("hero.btn")}</button>
          </div>

          <div className="hero-wrapper">
            <img className='hero-wrapper-circle' src={cirlceImg} alt="Doira rasm" />
            <img className='hero-wrapper-Fon' src={fonImg} alt="Fon rasm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;