import React, { useEffect, useState } from 'react';
import './Motivation.css';

// Expanded array of motivational quotes
const quotesArr = [
  { content: "Stay positive, work hard, and make it happen.", author: "Unknown" },
  { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { content: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { content: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { content: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { content: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { content: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { content: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { content: "The best revenge is massive success.", author: "Frank Sinatra" },
  { content: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" }
];

const Motivation = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [fade, setFade] = useState(true);

  // Function to select a random quote
  const setRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesArr.length);
    const randomQuote = quotesArr[randomIndex];
    setFade(false); // Start fade-out effect
    setTimeout(() => {
      setQuote(randomQuote.content);
      setAuthor(randomQuote.author);
      setFade(true); // Fade in new quote
    }, 300);
  };

  useEffect(() => {
    setRandomQuote();
  }, []);

  return (
    <div className="motivation-container" style={styles.container}>
      <h2 style={styles.heading}>✨ Daily Motivation</h2>

      <blockquote
        style={{
          ...styles.quote,
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        “{quote}”
        <footer style={styles.author}>— {author}</footer>
      </blockquote>

      <button
        onClick={setRandomQuote}
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#ba1e1e')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#d62828')}
      >
        Get New Quote
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '3rem',
    textAlign: 'center',
    backgroundColor: '#fff0f3',
    borderRadius: '10px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    margin: '2rem auto',
    maxWidth: '700px',
  },
  heading: {
    fontSize: '2rem',
    color: '#d62828',
    marginBottom: '1.5rem',
    textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
  },
  quote: {
    fontSize: '1.6rem',
    fontStyle: 'italic',
    color: '#333',
    marginBottom: '1.2rem',
    minHeight: '100px',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
  },
  author: {
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '#666',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#d62828',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Motivation;
