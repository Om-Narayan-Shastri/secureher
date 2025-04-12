import React, { useState } from 'react';
import db from '../firebaseConfig'; // ✅ Make sure this is correctly set up
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Counseling = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    issueType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!form.name || !form.email || !form.issueType || !form.message) {
      alert('Please fill all fields');
      return;
    }

    try {
      await addDoc(collection(db, 'counselingRequests'), {
        ...form,
        timestamp: Timestamp.now(),
      });
      setSubmitted(true);
      setForm({ name: '', email: '', issueType: '', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🧠 Counseling & Support</h2>
      <p style={styles.description}>
        We are here to help. Reach out to us for emotional, mental, or safety-related support.
      </p>

      {submitted ? (
        <p style={styles.success}>✅ Thank you for reaching out. We’ll contact you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <select
            style={styles.select}
            name="issueType"
            value={form.issueType}
            onChange={handleChange}
            required
          >
            <option value="">Select Issue Type</option>
            <option value="mental_health">Mental Health</option>
            <option value="harassment">Harassment</option>
            <option value="domestic_violence">Domestic Violence</option>
            <option value="other">Other</option>
          </select>
          <textarea
            style={styles.textarea}
            name="message"
            rows="5"
            placeholder="Describe your concern..."
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button}>Submit Request</button>
        </form>
      )}

      {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: '2.5rem',
    maxWidth: '700px',
    margin: '2rem auto',
    backgroundColor: '#fff7f7',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    color: '#d62828',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  select: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '0.8rem',
    backgroundColor: '#d62828',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  success: {
    fontSize: '1.1rem',
    color: 'green',
    textAlign: 'center',
    marginTop: '2rem',
  },
};

export default Counseling;
