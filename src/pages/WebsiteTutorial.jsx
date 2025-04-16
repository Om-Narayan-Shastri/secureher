import React from 'react';

const WebsiteTutorial = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Website Tutorial</h1>
      <p style={styles.intro}>Welcome to SecureHer! This guide will help you understand how to use our platform and access essential features.</p>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>🛡️ How to Use Emergency Features</h2>
        <ul>
          <li>Click the <strong>“Voice Trigger”</strong> button to activate emergency alert.</li>
          <li>Allow microphone permission for voice commands to work properly.</li>
          <li>In case of danger, shout the trigger word to notify your emergency contacts.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>💸 How to Make a Donation</h2>
        <ul>
          <li>Go to the <a href="/donation" style={styles.link}>Donation for Her</a> page.</li>
          <li>Enter your details and donation amount.</li>
          <li>Click the Donate button — your support matters!</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>📢 Accessing News & Resources</h2>
        <ul>
          <li>Visit the <a href="/news" style={styles.link}>News & Updates</a> page for the latest support tips and events.</li>
          <li>Check <strong>FAQs</strong> and <strong>Forms</strong> from the footer for quick answers.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>📞 Need Help?</h2>
        <ul>
          <li>Email us at <a href="mailto:omnarayanshastri12345@gmail.com" style={styles.link}>omnarayanshastri12345@gmail.com</a>.</li>
          <li>Use the Contact Directory from the footer to connect with local support agencies.</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  heading: {
    textAlign: 'center',
    color: '#2C3E50',
    fontSize: '2rem',
  },
  intro: {
    margin: '1rem 0 2rem 0',
    fontSize: '1.1rem',
  },
  section: {
    marginBottom: '2rem',
    background: '#f9f9f9',
    padding: '1rem',
    borderRadius: '10px',
  },
  subHeading: {
    color: '#d72638',
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
  },
  link: {
    color: '#2980b9',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default WebsiteTutorial;
