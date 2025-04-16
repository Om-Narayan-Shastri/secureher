import React, { useState } from 'react';

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Report an Issue',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for submitting the form!');
    setFormData({ name: '', email: '', category: 'Report an Issue', message: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📋 Feedback Form</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name</label>
        <input
          style={styles.input}
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label style={styles.label}>Category</label>
        <select
          style={styles.select}
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Report an Issue</option>
          <option>Request Support</option>
          <option>Volunteer</option>
          <option>Feedback</option>
        </select>

        <label style={styles.label}>Message</label>
        <textarea
          style={styles.textarea}
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '30px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
    marginTop: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    marginTop: '20px',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

export default Forms;
