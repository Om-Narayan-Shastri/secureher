import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div className="columns" style={styles.columns}>

          {/* Column 1 */}
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Resources</h3>
            <ul style={styles.list}>
              <li><a href="/donation" style={styles.link}>Donation for Her</a></li>
              <li><a href="/contact-directory" style={styles.link}>Contact Directory</a></li>
              <li><a href="/forms" style={styles.link}>Forms</a></li>
              <li><a href="/news" style={styles.link}>News &amp; Updates</a></li>
              <li><a href="/paqs" style={styles.link}>FAQs</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Legal & Help</h3>
            <ul style={styles.list}>
              <li><a href="/tutorial" style={styles.link}>Website Tutorial</a></li>
              <li><a href="/accessibility" style={styles.link}>Accessibility</a></li>
              <li><a href="/disclaimer" style={styles.link}>Disclaimer</a></li>
              <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
              {/* <li><a href="#" style={styles.link}>FAQs</a></li> */}
            </ul>
          </div>

          {/* Column 3 */}
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Departments</h3>
            <ul style={styles.list}>
              <li><a href="/parks&recreation" style={styles.link}>Parks &amp; Recreation</a></li>
              <li><a href="/publicWorks" style={styles.link}>Public Works</a></li>
              <li><a href="/policepepartment" style={styles.link}>Police Department</a></li>
              {/* <li><a href="#" style={styles.link}>Fire</a></li> */}
              <li><a href="/mayor-council" style={styles.link}>Mayor &amp; City Council</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Follow Us</h3>
            <div style={styles.socialIcons}>
              <a href="https://facebook.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <hr style={styles.divider} />
          <p style={styles.copyText}>© 2025 SecureHer | Built with ❤️ for every girl</p>
          <a href="mailto:omnarayanshastri12345@gmail.com" style={styles.contactLink}>Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

// The styles object remains unchanged
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

// Add global styles with hover effect
const hoverStyle = document.createElement('style');
hoverStyle.innerHTML = `
  footer a:hover {
    color: #ffd700;
    transform: translateY(-2px);
  }
`;
document.head.appendChild(hoverStyle);

// Responsive tweaks
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
