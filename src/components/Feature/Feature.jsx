import React from 'react'
import "./Feature.css";
import { useTranslation } from 'react-i18next';
import oq from './images/oqdoktir.png';
import galichka from './images/galichka.png';

const Feature = () => {

    const { t } = useTranslation();

  return (
    <div className="feature">
        <div className="container">
            <div className="feature-container">

                 <div className="feature-main">
                    <img  className='feature-main-img' src= {oq} alt="" />
                </div>

                <div className="feature-wrapper">
                    <img className='feature-wrapper-img' src= {galichka} alt="" />
                    <h2 className='feature-wrapper-title'> {t("feature.wrapperTitle")} </h2>
                    <button className='feature-wrapper-btn'> {t("feature.wrapperBtn")} </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Feature