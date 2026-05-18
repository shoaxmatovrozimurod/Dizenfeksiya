  // Header.jsx - To'g'ri ko'rinishi
  import React from 'react'
  import { useTranslation } from 'react-i18next';
  import logoImg from './images/logou1.png'; 
  import "./Header.css";

  const Header = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (event) => {
      i18n.changeLanguage(event.target.value);
    }

    return (
      <div className='header'>
        <div className="container">
          <div className="header-container">
            <a href="#"><img src={logoImg} alt="" /></a>
            <ul className='header-list'>
              <li className='header-item'><a className='header-item-link' href="#">{t("header.home")}</a></li>
              <li className='header-item'><a className='header-item-link' href="#">{t("header.about")}</a></li>
              <li className='header-item'><a className='header-item-link' href="#">{t("header.services")}</a></li>
              <li className='header-item'><a className='header-item-link' href="#">{t("header.contact")}</a></li>
            </ul>


            <select className='header-select' onChange={handleChangeLanguage} value={i18n.language}>
              <option value="uz">UZB</option>
              <option value="en">ENG</option>
              <option value="ru">Rus</option>
            </select>

            <button className='header-btn'> {t("header.btn")} </button>
         </div>
        </div>
     </div>
    )
  }

  export default Header;