import React, { useEffect, useState } from 'react';

const NewsUpdates = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with the actual API endpoint from womensmediacenter.com
    fetch('https://api.example.com/news')
      .then(response => response.json())
      .then(data => {
        setNews(data.articles || data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>News & Updates</h2>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {news.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsUpdates;
