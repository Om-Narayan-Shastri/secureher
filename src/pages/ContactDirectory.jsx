import React from 'react';

const contacts = [
  {
    department: 'Police Emergency',
    phone: '112',
    description: 'Call this number in case of any criminal emergency.',
  },
  {
    department: 'Women Helpline (India)',
    phone: '181',
    description: 'For women’s safety and assistance.',
  },
  {
    department: 'Domestic Violence Helpline',
    phone: '7827-170-170',
    description: 'Support for domestic abuse victims.',
  },
  {
    department: 'Child Helpline',
    phone: '1098',
    description: 'Report child abuse or provide help to a child in distress.',
  },
  {
    department: 'Cyber Crime Helpdesk',
    phone: '1930',
    description: 'Report cyber crimes including online harassment.',
  },
];

const ContactDirectory = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📞 Contact Directory</h1>
      <ul style={styles.list}>
        {contacts.map((contact, index) => (
          <li key={index} style={styles.item}>
            <h2 style={styles.department}>{contact.department}</h2>
            <p style={styles.description}>{contact.description}</p>
            <a href={`tel:${contact.phone}`} style={styles.phone}>
              📱 {contact.phone}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '80vh',
  },
  heading: {
    fontSize: '2rem',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '30px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: '800px',
    marginInline: 'auto',
  },
  item: {
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    marginBottom: '20px',
  },
  department: {
    fontSize: '1.2rem',
    color: '#34495e',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
  },
  phone: {
    color: '#e74c3c',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

export default ContactDirectory;
