import React, { useState } from 'react';
import './Message.css';
import { useTranslation } from 'react-i18next';
import odam from './images/person.png'

const Message = () => {
  const { t } = useTranslation();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !phone) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setLoading(true);

    // Siz qo'ygan haqiqiy ma'lumotlar
    const TELEGRAM_TOKEN = "8782036842:AAGdjY193vFIyuKBmql97R3AcdgjMh9FaPA"; 
    const CHAT_ID = "8419615333"; 
    
    const text = `🔔 YANGI ARIZA TUSHDI!\n\n👤 Mijoz ismi: ${name}\n📞 Telefon raqami: ${phone}\n📅 Yuborilgan vaqt: ${new Date().toLocaleString('uz-UZ')}`;
    
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: text })
      });

      if (response.ok) {
        alert("Arizangiz muvaffaqiyatli yuborildi!");
        setName('');
        setPhone('');
      } else {
        alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
      }
    } catch (error) {
      alert("Tarmoqda xatolik yuz berdi! Internetni tekshiring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="message">
      <div className="container">
        <div className="message-container">
          
          <div className="message-form-box">
            <h3 className="message-form-title">{t("message.formTitle")}</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="message-input-group">
                <input 
                  type="text" 
                  placeholder={t("message.placeholderName")} 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="message-input-group">
                <input 
                  type="text" 
                  placeholder="+998" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="message-checkbox-group">
                <input type="checkbox" id="privacy-check" required />
                <label htmlFor="privacy-check">{t("message.privacy")}</label>
              </div>

              <button type="submit" className="message-submit-btn" disabled={loading}>
                {loading ? "..." : t("message.btnText")}
              </button>
            </form>
          </div>

          {/* 2. O'ng tomondagi matn qismi */}
          <div className="message-text-box">
                <h2 className="message-main-title">{t("message.mainTitle")}
                <img src= {odam} width={200} height={220} alt="" />
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Message;