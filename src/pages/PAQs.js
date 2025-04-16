import React from 'react';

const PAQs = () => {
  const questions = [
    {
      q: "What should I do in an emergency situation?",
      a: "Immediately press the emergency voice trigger or alert button in the SecureHer app. It will notify your trusted contacts and authorities."
    },
    {
      q: "Is my location shared with anyone?",
      a: "Your live location is only shared when you activate an emergency alert. You can manage trusted contacts in settings."
    },
    {
      q: "Can I get mental health support here?",
      a: "Yes, SecureHer offers motivational resources and access to counseling support. Visit the Mental Health section for more details."
    },
    {
      q: "Is this platform safe and secure?",
      a: "Absolutely! We prioritize user safety and data security with end-to-end encryption and privacy-first policies."
    },
    {
      q: "How do I contribute to the platform?",
      a: "You can donate via the 'Donation for Her' section, or volunteer by contacting our support team directly."
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>PAQs – People Also Questions</h2>
      {questions.map((item, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.question}>{item.q}</h3>
          <p style={styles.answer}>{item.a}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'sans-serif',
    color: '#2c3e50',
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#d72638',
  },
  card: {
    background: '#ecf0f1',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  },
  question: {
    marginBottom: '10px',
    color: '#34495e',
    fontWeight: '600',
  },
  answer: {
    margin: 0,
    color: '#555',
  },
};

export default PAQs;
