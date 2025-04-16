import React from 'react';
import { FaTree, FaWalking, FaShieldAlt, FaHeart } from 'react-icons/fa';

const ParksAndRecreation = () => {
  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        <h1 style={styles.bannerText}>Parks & Recreation</h1>
      </div>

      <div style={styles.container}>
        <p style={styles.intro}>
          SecureHer believes that accessible parks and recreational activities play a vital role in improving mental
          well-being and building a sense of safety and community for women. Here's how we're making a difference.
        </p>

        {/* Safe Parks Initiative */}
        <section style={styles.section}>
          <h2 style={styles.subheading}><FaShieldAlt style={styles.icon} /> Safe Parks Initiative</h2>
          <p style={styles.text}>
            We partner with local authorities to ensure parks are well-lit, secure, and welcoming. These parks often have:
          </p>
          <ul style={styles.list}>
            <li>Dedicated women-only hours or zones</li>
            <li>Security personnel and surveillance cameras</li>
            <li>Emergency alert stations and contact points</li>
          </ul>
        </section>

        {/* Upcoming Events */}
        <section style={styles.section}>
          <h2 style={styles.subheading}><FaTree style={styles.icon} /> Upcoming Events</h2>
          <div style={styles.cards}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Yoga in the Park</h3>
              <p>Every Saturday, 7 AM - Central Garden</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Self-Defense Workshops</h3>
              <p>Monthly with certified instructors</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Wellness Walks</h3>
              <p>Morning walks led by women volunteers</p>
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section style={styles.section}>
          <h2 style={styles.subheading}><FaHeart style={styles.icon} /> How You Can Help</h2>
          <p style={styles.text}>
            Suggest safe parks, report concerns, or volunteer at events. Submit your interest through our{' '}
            <a href="/forms" style={styles.link}>Community Involvement Form</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'sans-serif',
    color: '#2c3e50',
  },
  banner: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1561488111-3c61be5d94e2?auto=format&fit=crop&w=1500&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '60px 20px',
    textAlign: 'center',
  },
  bannerText: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    color: '#d72638', // red text
    textShadow: '2px 2px 8px rgba(255,255,255,0.6)',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '30px 20px',
  },
  intro: {
    fontSize: '1.1rem',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '40px',
  },
  subheading: {
    fontSize: '1.6rem',
    marginBottom: '15px',
    color: '#34495e',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    flex: '1 1 250px',
    background: '#ecf0f1',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  cardTitle: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  link: {
    color: '#d72638',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  icon: {
    color: '#27ae60',
    fontSize: '1.3rem',
  },
};

export default ParksAndRecreation;
