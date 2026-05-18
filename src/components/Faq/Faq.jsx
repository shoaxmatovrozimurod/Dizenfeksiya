import React from 'react';
import "./Faq.css";
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className="faq">
      <div className="container">
        <div className="faq-container">
          <h2 className="faq-title">{t("faq.title")}</h2>

          <div className="faq-list">
    
            <div className="faq-item">
              <span className="faq-question">{t("faq.question1")}</span>
              <span className="faq-icon-arrow">➔</span>
            </div>

            <div className="faq-item">
              <span className="faq-question">{t("faq.question2")}</span>
              <span className="faq-icon-arrow">➔</span>
            </div>

            <div className="faq-item active">
              <div className="faq-item-header">
                <span className="faq-question">{t("faq.question3")}</span>
                <span className="faq-icon-arrow">➔</span>
              </div>
              <p className="faq-answer">{t("faq.answer3")}</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Faq;