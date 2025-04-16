import React from 'react';
import {
  FaPhoneAlt,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaHandsHelping,
} from 'react-icons/fa';

const PoliceDepartment = () => {
  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        <h1 style={styles.bannerText}>Police Department</h1>
      </div>

      <div style={styles.container}>
        <p style={styles.intro}>
          SecureHer partners with local law enforcement to enhance women’s safety through responsive action, community trust, and educational outreach. Learn how our Police Department makes an impact:
        </p>

        {/* Sections */}
        <div style={styles.cardsWrapper}>
          <Card
            icon={<FaPhoneAlt />}
            title="Emergency Assistance"
            description="In urgent situations, our 24/7 helpline ensures quick and confidential police response with officers trained in handling sensitive cases."
          />
          <Card
            icon={<FaShieldAlt />}
            title="Women's Protection Cell"
            description="Dedicated to supporting victims of harassment, domestic violence, and stalking with trauma-sensitive handling and privacy."
          />
          <Card
            icon={<FaMapMarkerAlt />}
            title="Night Patrol & Safe Zones"
            description="Regular patrolling, CCTV coverage, and Safe Zone alerts around educational institutions and public transport points."
          />
          <Card
            icon={<FaHandsHelping />}
            title="Community Safety Programs"
            description="Workshops on self-defense, safety awareness, and legal rights to build confidence and reduce vulnerability."
          />
        </div>

        <div style={styles.reportSection}>
          <p style={styles.reportText}>
            Have a concern or safety issue? Let us know via our{' '}
            <a href="/forms" style={styles.link}>Police Assistance Form</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, description }) => (
  <div style={styles.card}>
    <div style={styles.iconWrapper}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{description}</p>
  </div>
);

const styles = {
  page: {
    fontFamily: 'sans-serif',
    background: 'linear-gradient(to bottom, #f8f9fa, #ecf0f1)',
    minHeight: '100vh',
    color: '#2c3e50',
  },
//   banner: {
//     background: 'url("https://images.unsplash.com/photo-1598477382679-b0d3f062a400?auto=format&fit=crop&w=1500&q=80") center center / cover no-repeat',
//     padding: '80px 20px',
//     textAlign: 'center',
//     color: '#fff',
//     position: 'relative',
//     minHeight: '250px', // ✅ Add this
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
    banner:{
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
  
  
  bannerText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  intro: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  cardsWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '25px',
    marginBottom: '40px',
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '25px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.3rem',
    margin: '15px 0 10px',
    color: '#34495e',
  },
  cardDesc: {
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  iconWrapper: {
    fontSize: '1.8rem',
    color: '#e67e22',
    transition: 'transform 0.2s ease-in-out',
  },
  reportSection: {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #ccc',
  },
  reportText: {
    fontSize: '1rem',
    marginTop: '10px',
  },
  link: {
    color: '#2980b9',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

export default PoliceDepartment;
