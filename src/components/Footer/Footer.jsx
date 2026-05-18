import React from 'react'
import { useTranslation } from 'react-i18next';
import "./Footer.css";
import logo from './images/log.png';
import joy from './images/locatsion.png'
import vector from './images/vector.png'
import call from './images/phone.png'
import icon from './images/icon.png'

const Footer = () => {

const { t } = useTranslation();

  return (
   <div className="footer">
    <div className="container">
        <div className="footer-container">
            <img src= {logo} alt="" />
            <div className="footer-box">
                 <img src= {joy} alt="" />
                 <p className='footer-box-text'> {t("footer.boxText")} </p>
                 <img className='footer-vector' width={3} height={2} src= {vector} alt="" />
            </div>

            <div className="footer-wrapper">
                <img src= {call} alt="" />
                <p className='footer-wrapper'> {t("footer.wrapperText")} </p>
                
            </div>

            <img className='footer-icon' src= {icon} width={800} height={45} alt="" />

        </div>
    </div>
   </div>
  )
}

export default Footer