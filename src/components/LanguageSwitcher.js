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
      <button onClick={() => changeLanguage('en')} style={styles.button}>
        EN
      </button>
      <button onClick={() => changeLanguage('hi')} style={styles.button}>
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
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: 'bold',
    background: '#fff',
    color: '#2C3E50',
    transition: 'background 0.3s',
  },
};

export default LanguageSwitcher;
