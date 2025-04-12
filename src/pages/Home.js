import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import helpImg from '../assest/Help.png'; // Make sure the image path is correct

const Home = () => {
  const navigate = useNavigate();

  const handleHelpClick = () => {
    navigate('/emergency');
  };

  return (
    <div className="home-wrapper">
      {/* Header */}
      <h1>
        Welcome to <span className="brand">SecureHer</span> 👋
      </h1>
      <p>
        Your voice-activated safety and wellness companion. Empowering women with safety, motivation, and support—all in one place.
      </p>

      {/* Help Button Section */}
      <div className="help-button-wrapper">
        <img
          src={helpImg}
          alt="Help"
          className="help-button pulse"
          onClick={handleHelpClick}
        />
        <p className="help-text">Tap for Emergency Alert</p>
      </div>

      {/* Why SecureHer Section */}
      <div className="additional-content">
        <h2>Why SecureHer?</h2>
        <p>
          SecureHer provides immediate support for women in any emergency situation. Our innovative platform integrates cutting-edge voice recognition, real-time location tracking, and instant alerts to ensure your safety.
        </p>
        <p>
          Whether you're at home, on the go, or in unfamiliar territory, SecureHer is your trusted companion—always ready to help, motivate, and empower you.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="home-sections">
        <div className="card" style={{ animationDelay: '0s' }}>
          <h2 className="gradient-text">Safety Awareness</h2>
          <ul>
            <li>Share your live location with trusted contacts.</li>
            <li>Use voice trigger to alert emergency services instantly.</li>
            <li>Stay vigilant in unfamiliar areas and avoid distractions.</li>
            <li>Keep emergency contacts easily accessible.</li>
          </ul>
        </div>

        <div className="card" style={{ animationDelay: '0.3s' }}>
          <h2 className="gradient-text">Lifestyle & Wellness</h2>
          <ul>
            <li>Practice mindfulness or journaling for mental clarity.</li>
            <li>Stay active—exercise boosts mood and confidence.</li>
            <li>Surround yourself with a supportive community.</li>
            <li>Use tech tools wisely—choose secure transport options.</li>
          </ul>
        </div>

        <div className="card" style={{ animationDelay: '0.6s' }}>
          <h2 className="gradient-text">Empower Yourself</h2>
          <p>
            SecureHer isn’t just an app—it’s a movement. Let’s create a world where women feel safe, confident, and unstoppable. 💪💖
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
