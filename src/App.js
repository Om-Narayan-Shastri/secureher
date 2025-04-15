import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import Emergency from './pages/Emergency';
import Motivation from './pages/Motivation';
import Counseling from './pages/Counseling';
import About from './pages/About';
import NewsUpdates from './pages/NewsUpdates';
import PrivacyPolicy from './pages/PrivacyPolicy';  // Import the PrivacyPolicy page
import NotFound from './pages/NotFound';

// Initialize i18next (ensure you have set up your src/i18n.js configuration file)
import './i18n';

function App() {
  const [location, setLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [micStatus, setMicStatus] = useState("Initializing...");
  const [micEnabled, setMicEnabled] = useState(true);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLocationLoading(false);
        console.log("📍 Location fetched:", latitude, longitude);
      },
      (error) => {
        console.error("Location access denied:", error.message);
        alert("📍 Please allow location access to proceed.");
        setLocationLoading(false);
      }
    );
  };

  const handleEmergencyTrigger = () => {
    alert('🚨 Emergency Trigger Activated!');
    getLocation(); // Fetch location when emergency is triggered
  };

  return (
    <div
      className="App"
      style={{
        fontFamily: 'sans-serif',
        backgroundColor: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/emergency"
            element={
              <Emergency
                handleEmergencyTrigger={handleEmergencyTrigger}
                getLocation={getLocation}
                micStatus={micStatus}
                setMicStatus={setMicStatus}
                micEnabled={micEnabled}
                setMicEnabled={setMicEnabled}
                location={location}
                locationLoading={locationLoading}
              />
            }
          />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<NewsUpdates />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />  {/* Privacy Policy route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
