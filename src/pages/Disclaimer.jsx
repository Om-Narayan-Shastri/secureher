import React, { useEffect, useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Disclaimer = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100); // slight delay for smooth animation
  }, []);

  return (
    <div style={{ ...styles.wrapper, opacity: fadeIn ? 1 : 0, transform: fadeIn ? 'translateY(0)' : 'translateY(30px)' }}>
      <div style={styles.container}>
        <div style={styles.header}>
          <FaExclamationTriangle style={styles.icon} />
          <h1 style={styles.heading}>Disclaimer</h1>
        </div>
        <p style={styles.text}>
          The information provided on the <strong>SecureHer</strong> platform is for general informational purposes only.
          All content, including resources, links, and guides, is offered in good faith. However, we make no
          representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity,
          reliability, or completeness of any information on the platform.
        </p>
        <p style={styles.text}>
          Under no circumstance shall <strong>SecureHer</strong> or its team be held liable for any loss or damage incurred as a result of
          the use of the platform or reliance on any information provided. Your use of the site and your reliance on any
          information on the site is solely at your own risk.
        </p>
        <p style={styles.text}>
          This site may contain links to external websites that are not provided or maintained by SecureHer. We do not
          guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        </p>
        <p style={styles.text}>
          For personal assistance or emergencies, always contact the appropriate authorities or trusted professionals.
        </p>
        <p style={{ ...styles.text, fontStyle: 'italic', marginTop: '20px' }}>
          This disclaimer is subject to change at any time without notice.
        </p>

        <div style={styles.ctaBox}>
          <p style={styles.ctaText}>
            For more help, visit our <a href="/contact-directory" style={styles.link}>Contact Directory</a> or <a href="/forms" style={styles.link}>Report Form</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    transition: 'all 0.6s ease-out',
  },
  container: {
    maxWidth: '960px',
    margin: '50px auto',
    padding: '40px',
    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#2c3e50',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px',
  },
  icon: {
    fontSize: '2rem',
    color: '#e74c3c',
    marginRight: '12px',
  },
  heading: {
    fontSize: '2rem',
    borderBottom: '2px solid #ddd',
    paddingBottom: '5px',
    margin: 0,
  },
  text: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  ctaBox: {
    marginTop: '30px',
    background: '#fefefe',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  ctaText: {
    fontSize: '1rem',
  },
  link: {
    color: '#0077ff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Disclaimer;
