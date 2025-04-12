import React, { useEffect } from 'react';
import './About.css'; // 👈 import CSS file
import radhaImg from '../assest/Radha.jpg';
import asthaImg from '../assest/Astha.jpg';
import omImg from '../assest/Om.jpg';
import shaliniImg from '../assest/Shalini.jpg';

const contributors = [
  {
    name: 'Astha Bhardwaj',
    role: 'Project Ideator',
    profession: 'Psychology Student',
    image: asthaImg,
    description: 'Astha initiated the core idea behind SecureHer, focusing on emotional safety and mental health empowerment.',
  },
  {
    name: 'Radha Maddeshiya',
    role: 'Feature Enhancer',
    profession: 'Sociology Student',
    image: radhaImg,
    description: 'Radha contributed additional motivational and emotional wellness ideas to shape SecureHer’s supportive nature.',
  },
  {
    name: 'Shalini Singh',
    role: 'Creative Contributor',
    profession: 'Tech Enthusiast',
    image: shaliniImg,
    description: 'Shalini provided crucial ideas that expanded the feature set and made the platform more relatable and engaging.',
  },
  {
    name: 'Om Narayan Shastri',
    role: 'Lead Developer',
    profession: 'Web Developer',
    image: omImg,
    description: 'Om brought the project to life, implementing all functionalities using React, Firebase, and modern web technologies.',
  },
];

const About = () => {
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      .about-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      }
    `;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="about-container">
      <h2 style={styles.heading}>About SecureHer 🔐</h2>
      <p style={styles.intro}>
        <strong>SecureHer</strong> is a safety and support platform for women, offering emergency alerts 🚨, motivational resources 💪, and counseling access 🤝. Developed with empathy ❤️, cutting-edge tech 💻, and collaboration 🤝 to uplift and protect.
      </p>

      <h3 style={styles.subheading}>🌟 Meet the Contributors 🌟</h3>

      <div style={styles.cardsContainer}>
        {contributors.map((person, index) => (
          <div key={index} className="about-card" style={styles.card}>
            <img src={person.image} alt={person.name} style={styles.image} />
            <h4 style={styles.name}>{person.name}</h4>
            <p style={styles.role}>{person.role}</p>
            <p style={styles.profession}>{person.profession}</p>
            <p style={styles.description}>{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: '2.5rem',
    color: '#d72638',
    textAlign: 'center',
    marginBottom: '1.2rem',
  },
  intro: {
    fontSize: '1.1rem',
    textAlign: 'center',
    marginBottom: '2rem',
    padding: '0 1rem',
    lineHeight: '1.6',
  },
  subheading: {
    fontSize: '1.8rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#444',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  card: {
    flex: '1 1 260px',
    maxWidth: '300px',
    backgroundColor: '#fff9f9',
    borderRadius: '16px',
    padding: '1.5rem',
    textAlign: 'center',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '3px solid #d72638',
  },
  name: {
    fontSize: '1.3rem',
    color: '#d72638',
    margin: '0.5rem 0',
  },
  role: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
  },
  profession: {
    fontSize: '0.95rem',
    color: '#777',
    marginBottom: '0.8rem',
  },
  description: {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.4',
  },
  note: {
    textAlign: 'center',
    marginTop: '3rem',
    fontStyle: 'italic',
    color: '#666',
    padding: '0 1rem',
  },
};

export default About;
