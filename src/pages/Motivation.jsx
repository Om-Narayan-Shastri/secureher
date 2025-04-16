import React, { useState, useEffect } from 'react';
import './Motivation.css';

const Motivation = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      setQuote("Failed to fetch a quote.");
      setAuthor("Try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="motivation-wrapper">
      <h1 className="motivation-heading">Your Daily Motivation</h1>
      <div className="quote-card">
        {loading ? (
          <p className="loading">Fetching a powerful thought for you...</p>
        ) : (
          <>
            <p className="quote">“{quote}”</p>
            <p className="author">– {author}</p>
            <button className="refresh-btn" onClick={fetchQuote}>
              Inspire Me Again
            </button>
          </>
        )}
      </div>
      <p className="signature">@reallygreatsite</p>
    </div>
  );
};

export default Motivation;
