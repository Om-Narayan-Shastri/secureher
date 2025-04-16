import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Language changed to:", lng);
  };

  return (
    <div style={styles.container}>
      <button
        onClick={() => changeLanguage('en')}
        style={{
          ...styles.button,
          backgroundColor: i18n.language === 'en' ? '#FFD700' : '#fff',
        }}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('hi')}
        style={{
          ...styles.button,
          backgroundColor: i18n.language === 'hi' ? '#FFD700' : '#fff',
        }}
      >
        HI
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  button: {
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    borderRadius: '6px',
    fontWeight: 'bold',
    color: '#2C3E50',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
};

export default LanguageSwitcher;
