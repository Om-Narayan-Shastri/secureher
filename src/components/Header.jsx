import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImg from '../assest/Logo.jpeg'; // Adjust path if needed

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div style={styles.languageSwitcher}>
      {['en', 'hi'].map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          style={{
            ...styles.langButton,
            background: i18n.language === lang ? '#FFD700' : 'transparent',
          }}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header style={styles.header}>
      <Link to="/" style={{ ...styles.logoContainer, ...styles.link }} onClick={() => setMenuOpen(false)}>
        <img src={logoImg} alt="SecureHer Logo" style={styles.logoImg} />
        <span style={styles.logoText}>SecureHer</span>
      </Link>

      {isMobile && (
        <button onClick={toggleMenu} style={styles.hamburger} className="hamburger-btn">
          ☰
        </button>
      )}

      <nav
        style={{
          ...styles.nav,
          ...(isMobile ? (menuOpen ? styles.navMobileOpen : styles.navMobileClosed) : {}),
        }}
        className="nav-links"
      >
        {['Motivation', 'Counseling', 'Emergency', 'About'].map((page) => {
          const path = `/${page.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <Link
              key={page}
              to={path}
              style={{
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              }}
              onClick={() => setMenuOpen(false)}
            >
              {page}
            </Link>
          );
        })}

        <LanguageSwitcher />
      </nav>
    </header>
  );
};

// Styles
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#d62828',
    padding: '10px 20px',
    color: 'white',
    position: 'relative',
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logoImg: {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  },
  nav: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
  },
  navMobileOpen: {
    flexDirection: 'column',
    position: 'absolute',
    top: '60px',
    right: '20px',
    background: '#d62828',
    padding: '10px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  navMobileClosed: {
    display: 'none',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '8px 0',
    transition: 'all 0.2s ease',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  },
  activeLink: {
    color: '#FFD700',
    textDecoration: 'underline',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  },
  hamburger: {
    display: 'block',
    fontSize: '26px',
    background: 'none',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
  },
  languageSwitcher: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginLeft: '10px',
  },
  langButton: {
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: 'bold',
    color: '#2C3E50',
    transition: 'background 0.3s',
  },
};

// Inject global hover styles
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  .nav-links a:hover {
    text-decoration: underline;
    color: #ffd6d6;
    transform: translateY(-1px);
  }

  .hamburger-btn:hover {
    transform: scale(1.1);
  }
`;
document.head.appendChild(styleTag);

export default Header;
