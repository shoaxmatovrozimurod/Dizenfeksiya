import React from 'react';
import "./About.css";
import { useTranslation } from 'react-i18next'; 
import img1 from './images/blue.png';
import img2 from './images/blueoch.png';
import img3 from './images/grin.png';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
        <div className="container">
            <div className="about-container">
                <div className="about-main">
                    <h5 className='about-main-title'> {t("about.mainTitle")} </h5>
                    <p className='about-main-text'> {t("about.mainText")} </p>
                </div>

                <ul className='about-list'>
                    <li className='about-item'>
                        <h6 className='about-item-title'> {t("about.itemTitle")} </h6>
                        <p className='about-item-text'> {t("about.itemText")} </p>
                        <img className='about-item-img' src={img1} alt="" />
                    </li>

                    <li className='about-item'>
                        <h6 className='about-item-title'> {t("about.itemTitle2")} </h6>
                        <p className='about-item-text'> {t("about.itemText2")} </p>
                        <img className='about-item-img' src={img2} alt="" />
                    </li>

                    <li className='about-item'>
                        <h6 className='about-item-title'> {t("about.itemTitle3")} </h6>
                        <p className='about-item-text'> {t("about.itemText3")} </p>
                        <img className='about-item-img' src={img3} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default About;