import React, { useState } from 'react';

const Donation = () => {
  const [donation, setDonation] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');
  
  const donationGoal = 50000; // Fixed goal (₹50,000)
  const currentDonation = 15000; // Example donation progress (₹15,000 for visualization)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (donation <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    setThankYouMessage(`Thank you for donating ₹${donation}! 💖 Your support is helping empower women everywhere.`);
    initiateRazorpayPayment(donation); // Initiate payment process
    setDonation('');
  };

  const initiateRazorpayPayment = (donationAmount) => {
    // Create Razorpay Payment Order (this should be done on the server side)
    const paymentOrderData = {
      amount: donationAmount * 100, // Amount in paise (1 INR = 100 paise)
      currency: "INR",
      receipt: `receipt_${Math.floor(Math.random() * 10000)}`,
      payment_capture: 1,
    };

    // Make an API request to your backend to create the order
    fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentOrderData),
    })
      .then((response) => response.json())
      .then((orderData) => {
        // Open Razorpay Checkout
        const options = {
          key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key ID
          amount: orderData.amount,
          currency: "INR",
          name: "SecureHer Trust",
          description: "Donation for women’s safety and wellness.",
          image: "https://example.com/your-logo.png", // Optional: Add your logo here
          order_id: orderData.id,
          handler: function (response) {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            // You can process payment success here (e.g., save data to your database)
          },
          prefill: {
            name: "Donor Name",
            email: "donor@example.com",
            contact: "1234567890",
          },
          notes: {
            donation_amount: donationAmount,
          },
          theme: {
            color: "#d72638",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      })
      .catch((error) => {
        alert("Payment initiation failed. Please try again.");
        console.error("Error initiating Razorpay payment", error);
      });
  };

  // Calculate the percentage progress based on the goal and current donation amount
  const progressPercentage = Math.min((currentDonation / donationGoal) * 100, 100);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Help Us Empower Women! 💪💖</h2>
      <p style={styles.description}>
        Your donation helps make <strong>SecureHer</strong> better. It funds programs that support women in their academic journey, improve their physical health, and provide emotional well-being.
      </p>
      <p style={styles.description}>
        Donations go directly to the <strong>SecureHer Trust</strong>, focused on giving women the resources they need to succeed in education and lead healthier lives.
      </p>

      {/* Progress bar (fixed goal) */}
      <div style={styles.progressContainer}>
        <p style={styles.progressText}>Donation Goal: ₹{donationGoal}</p>
        <div style={styles.progressBarWrapper}>
          <div style={{ ...styles.progressBar, width: `${progressPercentage}%` }} />
        </div>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="amount" style={styles.label}>Enter Donation Amount (INR):</label>
        <input
          type="number"
          id="amount"
          placeholder="₹100"
          value={donation}
          onChange={(e) => setDonation(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Donate Now</button>
      </form>

      {/* Thank You Message */}
      {thankYouMessage && <p style={styles.thankYouMessage}>{thankYouMessage}</p>}

      <p style={styles.note}>
        Every contribution, no matter the size, makes a big difference. Thank you for being a part of this journey! 🙏
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '3rem auto',
    padding: '2rem',
    borderRadius: '12px',
    background: '#f9f9f9',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#d72638',
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
    color: '#555',
  },
  progressContainer: {
    marginBottom: '2rem',
    textAlign: 'left',
  },
  progressText: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#555',
  },
  progressBarWrapper: {
    height: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    marginTop: '5px',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#d72638',
    borderRadius: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  label: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
  },
  button: {
    padding: '0.8rem 2rem',
    backgroundColor: '#d72638',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
  thankYouMessage: {
    marginTop: '1.5rem',
    fontSize: '1.1rem',
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  note: {
    marginTop: '2rem',
    fontSize: '1rem',
    color: '#777',
  },
};

export default Donation;
