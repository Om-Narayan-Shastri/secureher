import React from 'react';

const MayorCouncil = () => {
  return (
    <main style={styles.main}>
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Mayor & City Council</h1>
        <p style={styles.heroSubtitle}>
          Empowering the city, one decision at a time — with safety, inclusion, and care.
        </p>
      </header>

      {/* Meet the Mayor */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>👑 Meet the Mayor</h2>
        <div style={styles.card}>
          <img
            src="https://via.placeholder.com/160"
            alt="Mayor"
            style={styles.image}
          />
          <div style={{ flex: 1 }}>
            <h3 style={styles.name}>Mayor Aaryan Shukla</h3>
            <p style={styles.text}>
              Mayor Aaryan is a passionate advocate for equality and justice. Under his leadership, the city thrives with safer neighborhoods, improved infrastructure, and progressive support for women’s welfare through SecureHer.
            </p>
          </div>
        </div>
      </section>

      {/* City Council */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🧑‍🤝‍🧑 City Council Members</h2>
        <div style={styles.grid}>
          {[
            { name: "Radha Maddeshiya", img: "Radha" },
            { name: "Kartik Barnwal", img: "Kartik" },
            { name: "Astha Bharadwaj", img: "Astha" },
            { name: "Kaushik Tiwari", img: "Kaushik" },
          ].map((member, i) => (
            <div key={i} style={styles.cardGlow}>
              <img
                src={`https://via.placeholder.com/120?text=${member.img}`}
                alt={member.name}
                style={styles.imageSmall}
              />
              <div>
                <h4 style={styles.name}>{member.name}</h4>
                <p style={styles.textSmall}>
                  Actively working towards betterment of safety, education, and opportunities across their communities.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📬 Get Involved</h2>
        <p style={styles.text}>
          Reach out with your ideas, feedback, or proposals. Civic involvement starts with one conversation.
        </p>
        <div style={styles.buttonWrapper}>
          <a href="/contact-directory" style={styles.button}>📖 View Contact Directory</a>
        </div>
      </section>
    </main>
  );
};

const styles = {
  main: {
    padding: '5vw',
    fontFamily: "'Segoe UI', sans-serif",
    background: 'linear-gradient(to right, #f8fbff, #e8f1fa)',
    color: '#2c3e50',
  },
  hero: {
    textAlign: 'center',
    padding: '10vw 5vw',
    background: 'linear-gradient(to right, #dceefb, #c3e0f3)',
    borderRadius: '16px',
    marginBottom: '8vw',
    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
  },
  heroTitle: {
    fontSize: '6vw',
    fontWeight: 'bold',
    marginBottom: '2vw',
  },
  heroSubtitle: {
    fontSize: '4vw',
    color: '#4a4a4a',
    maxWidth: '90%',
    margin: '0 auto',
  },
  section: {
    marginBottom: '10vw',
  },
  sectionTitle: {
    fontSize: '5vw',
    marginBottom: '4vw',
    color: '#1e2a38',
    borderLeft: '5px solid #d72638',
    paddingLeft: '12px',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '14px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
    alignItems: 'center',
  },
  cardGlow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '14px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textAlign: 'center',
    cursor: 'pointer',
  },
  image: {
    width: '160px',
    height: '160px',
    borderRadius: '16px',
    objectFit: 'cover',
    flexShrink: 0,
  },
  imageSmall: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#34495e',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#4f4f4f',
  },
  textSmall: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: '#666',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#d72638',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
};

export default MayorCouncil;
