import React from 'react';

const Accessibility = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Accessibility Statement</h1>
      <p style={styles.intro}>
        At <strong>SecureHer</strong>, we are committed to ensuring digital accessibility for all users, regardless of ability. We aim to improve the user experience for everyone by following accessibility best practices.
      </p>

      <section style={styles.section}>
        <h2 style={styles.heading}>Our Commitments</h2>
        <ul style={styles.list}>
          <li>Providing alternative text for all meaningful images.</li>
          <li>Ensuring keyboard navigability throughout the site.</li>
          <li>Maintaining proper color contrast for readability.</li>
          <li>Using semantic HTML to aid screen readers and assistive technologies.</li>
          <li>Offering voice-based emergency triggers for hands-free safety.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Need Help or Found an Issue?</h2>
        <p>
          If you experience difficulty accessing any part of the SecureHer platform, or have suggestions on how we can improve accessibility, please contact us:
        </p>
        <ul style={styles.contactList}>
          <li>Email: <a href="mailto:omnarayanshastri12345@gmail.com" style={styles.link}>omnarayanshastri12345@gmail.com</a></li>
          <li>Phone (Support): <a href="tel:+919999999999" style={styles.link}>+91-99999-99999</a></li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Continuous Improvement</h2>
        <p>
          We are continuously working to improve the accessibility of our platform. As technology and standards evolve, so will our platform’s features to ensure inclusivity for everyone.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '60px auto',
    padding: '0 20px',
    fontFamily: 'sans-serif',
    lineHeight: 1.7,
    color: '#2c3e50',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#34495e',
  },
  intro: {
    fontSize: '1.1rem',
    marginBottom: '30px',
  },
  section: {
    marginBottom: '30px',
  },
  heading: {
    fontSize: '1.4rem',
    marginBottom: '10px',
    color: '#1a1a1a',
  },
  list: {
    listStyle: 'disc inside',
    paddingLeft: '15px',
  },
  contactList: {
    listStyle: 'none',
    paddingLeft: '0',
    marginTop: '10px',
  },
  link: {
    color: '#d72638',
    textDecoration: 'none',
  },
};

export default Accessibility;
