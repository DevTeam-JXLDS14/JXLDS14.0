import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-header">
        <h1>Register for JXLDS 14.0</h1>
        <p>Join us for an unforgettable leadership experience</p>
      </div>

      <div className="register-content">
        {/*<div className="opening-soon">
          <h2>Get Ready for the Next Round</h2>
          <p>Stay tuned for the next opening...</p>
        </div>*/}
        <div className="form-container">
          <h2>Registration Form</h2>
          <p className="form-instruction">
            14th iteration already happened. Let's meet again in the next one!
          </p>

          <div className="form-embed">
            {/*<iframe
              src="https://tally.so/embed/nPMpre?alignLeft=1&hideTitle=1&dynamicHeight=1"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="JXLDS 14.0 Registration Form"
            >
              Loading…
            </iframe>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
