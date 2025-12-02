import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-header">
        <h1>Secure your spot for JXLDS 14.0</h1>
        <p>Be a part of an unforgettable leadership experience</p>
      </div>

      <div className="register-content">
        <div className="event-info">
          <h2>Event Details</h2>
          <div className="info-item">
            <strong>When?</strong> 24th & 25th January 2026
          </div>
          <div className="info-item">
            <strong>Venue:</strong> All will be revealed in due time.
          </div>
          <div className="info-item">
            <strong>For how long?:</strong> 2 Days
          </div>
          <div className="info-item">
            <strong>Registration Deadline:</strong> 14th December 2025
          </div>

          <h3>What to Expect</h3>
          <ul>
            <li>Interactive leadership workshops</li>
            <li>Networking with like-minded peers</li>
            <li>Expert facilitators & sessions</li>
            <li>Meals & refreshments included</li>
          </ul>

          <h3>Requirements</h3>
          <ul>
            <li>An active member of AIESEC in USJ</li>
          </ul>
        </div>

        <div className="form-container">
          <h2>Only Limited Spots! Register Now!</h2>
          

          {/* Tally Form Embed */}
          <div className="form-embed">
            <iframe
              src="https://tally.so/embed/nPMpre?alignLeft=1&hideTitle=1&dynamicHeight=1"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="JXLDS 14.0 Registration Form"
            >
              Loading…
            </iframe>
          </div>

          <div className="contact-info">
            <h3>Need Help?</h3>
            <p>Questions about registration? Contact our Delegate Vice Presidents:</p>
              <div className="contacts">
                <div className="contact-card">
                  <img
                    className="contact-avatar"
                    src="/images/oc/SHENAN.webp"
                    alt="Shenan Nathaniel"
                  />
                  <div className="contact-details">
                    <strong>Shenan Nathaniel</strong>
                    <p>Phone: +94 76 924 8763</p>
                    <p>
                      Email: <a href="mailto:shenan.nath@aiesec.net">shenan.nath@aiesec.net</a>
                    </p>
                  </div>
                </div>

                <div className="contact-card">
                  <img
                    className="contact-avatar"
                    src="/images/oc/PUMUTHU.webp"
                    alt="Pumuthu Weerakoon"
                  />
                  <div className="contact-details">
                    <strong>Pumuthu Weerakoon</strong>
                    <p>Phone: +94 76 102 0132</p>
                    <p>
                      Email: <a href="mailto:pumuthunimaya@aiesec.net">pumuthunimaya@aiesec.net</a>
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
