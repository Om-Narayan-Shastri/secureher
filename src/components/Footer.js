import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div className="columns" style={styles.columns}>
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Heading 1</h3>
            <ul style={styles.list}>
              <li><a href="#payment" style={styles.link}>Payment Center</a></li>
              <li><a href="#contact" style={styles.link}>Contact Directory</a></li>
              <li><a href="#forms" style={styles.link}>Forms</a></li>
              <li><a href="#news" style={styles.link}>News &amp; Updates</a></li>
              <li><a href="#faq" style={styles.link}>FAQs</a></li>
            </ul>
          </div>

          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Heading 2</h3>
            <ul style={styles.list}>
              <li><a href="#tutorial" style={styles.link}>Website Tutorial</a></li>
              <li><a href="#accessibility" style={styles.link}>Accessibility</a></li>
              <li><a href="#disclaimer" style={styles.link}>Disclaimer</a></li>
              <li><a href="#privacy" style={styles.link}>Privacy Policy</a></li>
              <li><a href="#faqs" style={styles.link}>FAQs</a></li>
            </ul>
          </div>

          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Heading 3</h3>
            <ul style={styles.list}>
              <li><a href="#parks" style={styles.link}>Parks &amp; Recreation</a></li>
              <li><a href="#publicworks" style={styles.link}>Public Works</a></li>
              <li><a href="#police" style={styles.link}>Police Department</a></li>
              <li><a href="#fire" style={styles.link}>Fire</a></li>
              <li><a href="#mayor" style={styles.link}>Mayor &amp; City Council</a></li>
            </ul>
          </div>

          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Follow Us</h3>
            <div style={styles.socialIcons}>
              <a href="https://facebook.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <hr style={styles.divider} />
          <p style={styles.copyText}>
            © 2025 SecureHer | Built with ❤️ For every girls
          </p>
          <a href="mailto:omnarayanshastri12345@gmail.com" style={styles.contactLink}>
            Contact Support
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(90deg, #2C3E50, #34495E)',
    color: '#fff',
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    width: '100%',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  columns: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'space-around',
    marginBottom: '30px',
  },
  column: {
    flex: '1 1 200px',
    minWidth: '200px',
  },
  columnHeading: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    // borderBottom: '2px solid #fff',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    paddingBottom: '5px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    margin: '6px 0',
    transition: 'color 0.3s, transform 0.2s',
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'row', // ensure social icons remain in one row
    gap: '0.8rem',
    marginTop: '10px',
    justifyContent: 'left',
  },
  socialLink: {
    color: '#fff',
    fontSize: '1.2rem',
    background: '#34495E',
    padding: '8px',
    borderRadius: '50%',
    transition: 'background 0.3s ease-in-out',
    textDecoration: 'none',
  },
  footerBottom: {
    textAlign: 'center',
    marginTop: '20px',
  },
  divider: {
    border: 'none',
    borderBottom: '1px solid #fff',
    marginBottom: '15px',
  },
  copyText: {
    fontSize: '0.9rem',
    margin: 0,
  },
  contactLink: {
    color: '#d72638',
    textDecoration: 'none',
    display: 'block',
    marginTop: '5px',
    fontWeight: 'bold',
  },
};

// Inject global hover styles for footer links and social icons
const hoverStyle = document.createElement('style');
hoverStyle.innerHTML = `
  footer a:hover {
    color: #ffd700;
    transform: translateY(-2px);
  }
`;
document.head.appendChild(hoverStyle);

// Responsive styles for mobile and tablet devices
const responsiveStyle = document.createElement('style');
responsiveStyle.innerHTML = `
  @media (max-width: 768px) {
    footer .columns {
      flex-direction: column !important;
      gap: 1rem !important;
    }
    footer h3 {
      font-size: 1rem !important;
    }
    footer p,
    footer a {
      font-size: 0.85rem !important;
    }
  }
`;
document.head.appendChild(responsiveStyle);

export default Footer;
