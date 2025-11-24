import './Register.css';

function Register() {
  return (
    <div className="register-page">
      <div className="register-header">
        <h1>Register for JXLDS 14.0</h1>
        <p>Join us for an unforgettable leadership experience</p>
      </div>

      <div className="register-content">
        <div className="event-info">
          <h2>Event Details</h2>
          <div className="info-item">
            <strong>Date:</strong> TBA
          </div>
          <div className="info-item">
            <strong>Venue:</strong> TBA
          </div>
          <div className="info-item">
            <strong>Duration:</strong> 2 Days
          </div>
          <div className="info-item">
            <strong>Registration Deadline:</strong> TBA
          </div>

          <h3>What to Expect</h3>
          <ul>
            <li>Interactive leadership workshops</li>
            <li>Networking with like-minded peers</li>
            <li>Expert facilitators & sessions</li>
            <li>Certificate of participation</li>
            <li>Meals & refreshments included</li>
          </ul>

          <h3>Requirements</h3>
          <ul>
            <li>Valid student ID or proof of enrollment</li>
            <li>Age: 18-25 years</li>
            <li>Commitment to attend both days</li>
          </ul>
        </div>

        <div className="form-container">
          <h2>Registration Form</h2>
          <p className="form-instruction">
            Please fill out the form below to register for JXLDS 14.0
          </p>
          
          {/* Google Form Embed - Replace with actual Google Form URL */}
          <div className="form-embed">
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="JXLDS 14.0 Registration Form"
            >
              Loading…
            </iframe>
            <p className="form-note">
              * Please replace the iframe src with your actual Google Form embed URL
            </p>
          </div>

          <div className="contact-info">
            <h3>Need Help?</h3>
            <p>Questions about registration? Contact us:</p>
            <p>Email: info@jxlds.com</p>
            <p>Phone: +94 XX XXX XXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
