import React from 'react';
import { FaTools, FaLightbulb, FaRoad, FaRecycle } from 'react-icons/fa';

const PublicWorks = () => {
  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        <div style={styles.bannerOverlay}>
          <h1 style={styles.bannerText}>Public Works</h1>
          <p style={styles.bannerSubtext}>Building safer, cleaner, and better communities for women</p>
        </div>
      </div>

      <div style={styles.container}>
        <p style={styles.intro}>
          SecureHer collaborates with civic bodies to ensure well-maintained, safe, and inclusive public infrastructure for women across all neighborhoods. Here's how the Public Works Department contributes to creating safer environments.
        </p>

        <div style={styles.cardGrid}>
          {/* Street Lighting */}
          <div style={styles.card}>
            <h2 style={styles.subheading}><FaLightbulb style={styles.icon} /> Street Lighting</h2>
            <p style={styles.text}>
              Adequate lighting significantly improves safety. We track and assist with installation and maintenance of street lights, especially in vulnerable or low-traffic areas.
            </p>
          </div>

          {/* Road Maintenance */}
          <div style={styles.card}>
            <h2 style={styles.subheading}><FaRoad style={styles.icon} /> Road Safety</h2>
            <p style={styles.text}>
              From pothole repairs to sidewalk reconstruction, our department ensures safer commutes for pedestrians and cyclists, prioritizing routes commonly used by women.
            </p>
          </div>

          {/* Sanitation */}
          <div style={styles.card}>
            <h2 style={styles.subheading}><FaRecycle style={styles.icon} /> Clean & Green</h2>
            <p style={styles.text}>
              Public hygiene matters. We manage the regular cleaning of public restrooms, garbage disposal, and promote eco-friendly zones in collaboration with the community.
            </p>
          </div>

          {/* Get Involved */}
          <div style={styles.card}>
            <h2 style={styles.subheading}><FaTools style={styles.icon} /> Get Involved</h2>
            <p style={styles.text}>
              Want to report a public issue or suggest improvements in your area? Visit our{' '}
              <a href="/forms" style={styles.link}>Public Works Suggestion Form</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'sans-serif',
    color: '#2c3e50',
    backgroundColor: '#f4f6f8',
  },
  banner: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1500&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 20px',
    textAlign: 'center',
    position: 'relative',
    color: '#fff',
  },
  bannerOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '40px 20px',
    borderRadius: '10px',
    display: 'inline-block',
  },
  bannerText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: '10px',
  },
  bannerSubtext: {
    fontSize: '1.2rem',
    color: '#f4f6f8',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  intro: {
    fontSize: '1.1rem',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '25px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  subheading: {
    fontSize: '1.4rem',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#34495e',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  link: {
    color: '#d72638',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  icon: {
    color: '#27ae60',
    fontSize: '1.2rem',
  },
};

// Add hover effects globally
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  a:hover {
    color: #ff9800 !important;
  }
  .card:hover {
    transform: translateY(-5px);
  }
`;
document.head.appendChild(styleTag);

export default PublicWorks;
