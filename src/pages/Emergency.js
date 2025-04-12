import React from 'react';
import VoiceTrigger from '../components/VoiceTrigger';

const getMicColor = (status = '') => {
  switch (status.toLowerCase()) {
    case 'listening': return '#28a745';
    case 'not supported':
    case 'error': return '#dc3545';
    case 'restarting...': return '#fd7e14';
    default: return '#6c757d';
  }
};

const Emergency = ({
  handleEmergencyTrigger,
  getLocation,
  micStatus,
  setMicStatus,
  micEnabled,
  setMicEnabled,
  location,
  locationLoading,
}) => {
  const micColor = getMicColor(micStatus);

  const triggerEmergency = () => {
    handleEmergencyTrigger();
    getLocation();
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>🛡️ SecureHer Emergency Assistant</h2>

        <p style={styles.instruction}>
          Say <span style={styles.keyword}>"help me"</span> or <span style={styles.keyword}>"SecureHer"</span> to activate emergency mode.
        </p>

        <div style={styles.section}>
          <p style={styles.label}>🎤 Mic Status:</p>
          <span style={{ ...styles.statusBadge, backgroundColor: micColor }}>
            {micStatus || 'Unknown'}
          </span>
        </div>

        <div style={styles.buttons}>
          <button
            onClick={() => setMicEnabled(!micEnabled)}
            style={{
              ...styles.button,
              backgroundColor: micEnabled ? '#6c757d' : '#28a745',
            }}
          >
            {micEnabled ? 'Turn Mic Off' : 'Turn Mic On'}
          </button>

          <button
            onClick={triggerEmergency}
            style={{ ...styles.button, ...styles.alertButton }}
          >
            🚨 Alert Now
          </button>
        </div>

        {micEnabled && (
          <VoiceTrigger
            onTrigger={triggerEmergency}
            setMicStatus={setMicStatus}
            micEnabled={micEnabled}
          />
        )}

        <div style={styles.locationSection}>
          {locationLoading ? (
            <p style={styles.loading}>📍 Fetching location...</p>
          ) : location && typeof location.latitude === 'number' ? (
            <div style={styles.locationBox}>
              <h3 style={styles.locationTitle}>📍 Your Coordinates</h3>
              <p><strong>Latitude:</strong> {location.latitude}</p>
              <p><strong>Longitude:</strong> {location.longitude}</p>
              <a
                href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.mapButton}
              >
                Open in Google Maps
              </a>
            </div>
          ) : (
            <p style={styles.info}>📍 Location not available. Click "Alert Now" to fetch.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    background: '#f0f4f8',
    minHeight: '100vh',
  },
  card: {
    width: '100%',
    maxWidth: '550px',
    background: '#ffffff',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    color: '#d62828',
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  instruction: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '1.5rem',
  },
  keyword: {
    background: '#ffd8d8',
    padding: '3px 8px',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '1.5rem',
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  statusBadge: {
    display: 'inline-block',
    marginTop: '6px',
    padding: '5px 12px',
    color: '#fff',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '0.95rem',
    textTransform: 'capitalize',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  button: {
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '260px',
    transition: 'all 0.2s ease-in-out',
  },
  alertButton: {
    backgroundColor: '#d62828',
    boxShadow: '0 0 10px rgba(214, 40, 40, 0.4)',
  },
  locationSection: {
    marginTop: '25px',
  },
  loading: {
    fontSize: '1rem',
    color: '#666',
  },
  info: {
    fontSize: '1rem',
    color: '#999',
  },
  locationBox: {
    padding: '16px',
    background: '#f8f9fa',
    borderRadius: '10px',
    border: '1px solid #ccc',
    textAlign: 'left',
  },
  locationTitle: {
    marginBottom: '10px',
    fontSize: '1.2rem',
    color: '#333',
  },
  mapButton: {
    display: 'inline-block',
    marginTop: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Emergency;
