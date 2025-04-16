import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import Accessibility from './pages/Accessibility'; 
import Home from './pages/Home';
import Emergency from './pages/Emergency';
import Motivation from './pages/Motivation';
import Counseling from './pages/Counseling';
import About from './pages/About';
import NewsUpdates from './pages/NewsUpdates';
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import the PrivacyPolicy page
import Donation from './pages/Donation';  // Import the Donation page
import NotFound from './pages/NotFound';
import WebsiteTutorial from './pages/WebsiteTutorial';
import ContactDirectory from './pages/ContactDirectory';
import Forms from './pages/Forms';
import PAQs from './pages/PAQs'; 
import Disclaimer from './pages/Disclaimer'; 
import ParksAndRecreation from './pages/ParksAndRecreation';
import PublicWorks from './pages/PublicWorks';
import PoliceDepartment from './pages/PoliceDepartment';
import MayorCouncil from './pages/MayorCouncil';

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
    <div className="App" style={styles.app}>
      <Header />

      <main style={styles.main}>
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
          <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Privacy Policy route */}
          <Route path="/donation" element={<Donation />} /> {/* Donation page route */}
          <Route path="*" element={<NotFound />} />
          <Route path="/tutorial" element={<WebsiteTutorial />} />
          <Route path="/contact-directory" element={<ContactDirectory />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/paqs" element={<PAQs />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/parks&recreation" element={<ParksAndRecreation />} />
          <Route path="/publicWorks" element={<PublicWorks />} />
          <Route path="/policepepartment" element={<PoliceDepartment />} />
          <Route path="/mayor-council" element={<MayorCouncil />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

// Styles moved to a separate object for cleaner code
const styles = {
  app: {
    fontFamily: 'sans-serif',
    backgroundColor: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
  },
};

export default App;
