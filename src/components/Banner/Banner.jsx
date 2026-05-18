import React from 'react';
import "./Banner.css";
import { useTranslation } from 'react-i18next'; 

const Banner = () => {
  // useTranslation hooki to'g'ri komponent ichiga joylashtirildi
  const { t } = useTranslation();

  return (
    <div className="banner">
        <div className="container">
            <div className="banner-container">
                
                <div className="banner-main">
                    {/* Chap tomondagi rasm yoki boshqa kontent uchun */}
                </div>

                <div className="banner-wrapper">
                    <h3 className='banner-wrapper-title'> {t("banner.wrapperTitle")} </h3>
                    <p className='banner-wrapper-text'> {t("banner.wrapperText")} </p>
                    <button className='banner-wrapper-btn'> {t("banner.wrapperBtn")} </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;