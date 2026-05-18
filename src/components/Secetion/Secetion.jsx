import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Secetion.css";
import img1 from './images/miya.png'; // Rasm importi to'g'ri
import img2 from './images/varoq.png'
import img3 from './images/qol.png'

const Section = () => {
  const { t } = useTranslation();

  return (
    <div className="section">
        <div className="container">
            <div className="section-container">
                <h1 className='section-title'> {t("section.mainTitle")} </h1>

                <ul className='section-list'>

                  <li className='section-list-item'>
                    {/* Rasm komponentga to'g'ri uzatilgan */}
                    <img className='section-list-item-img' src={img1} alt="" />
                    
                    <h2 className='section-list-item-title'> {t("section.itemTitle")} </h2>
                    <p className='section-list-item-text'> {t("section.itemText")} </p>
                  </li>

                  <li className='section-list-item'>
                    {/* Rasm komponentga to'g'ri uzatilgan */}
                    <img className='section-list-item-img' src={img2} alt="" />
                    
                    <h2 className='section-list-item-title'> {t("section.itemTitle2")} </h2>
                    <p className='section-list-item-text'> {t("section.itemText2")} </p>
                  </li>

                  <li className='section-list-item'>
                    {/* Rasm komponentga to'g'ri uzatilgan */}
                    <img className='section-list-item-img' src={img3} alt="" />
                    
                    <h2 className='section-list-item-title'> {t("section.itemTitle3")} </h2>
                    <p className='section-list-item-text'> {t("section.itemText3")} </p>
                  </li>

                </ul>
            </div>
        </div>
    </div>
  );
};

export default Section;