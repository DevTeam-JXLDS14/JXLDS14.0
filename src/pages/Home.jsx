import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2026-01-24T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>JXLDS 14.0</h1>
          <p className="hero-subtitle">Empowering Leaders of Tomorrow</p>
          <p className="hero-description">
            The flagship conference by AIESEC in USJ
          </p>
          <div className="hero-buttons">
            <a href="/register" className="btn btn-primary">
              Register Now
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>

          {/* Countdown Timer */}
          <div className="countdown-timer">
            <h3 className="countdown-title">Event Starts In</h3>
            <div className="countdown-boxes">
              <div className="countdown-box">
                <span className="countdown-value">{timeLeft.days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-box">
                <span className="countdown-value">{timeLeft.hours}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-box">
                <span className="countdown-value">{timeLeft.minutes}</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-box">
                <span className="countdown-value">{timeLeft.seconds}</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About JXLDS Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About JXLDS 14.0</h2>
          <p>
            Jayewardenepura Exchange Leadership Development Seminar (JXLDS) is a 2-day conference organized by
            AIESEC in University of Sri Jayewardenepura for the 14th consecutive year that creates a common
            platform for our potential leaders to enhance their leadership skills.
          </p>
          <p>
            Join us for a transformative experience that will equip you with
            essential leadership skills, broaden your perspectives, and connect
            you with passionate individuals committed to making a positive
            impact.
          </p>
        </div>
      </section>

      {/* Past Aftermovies Section */}
      <section className="aftermovies-section">
        <div className="container">
          <h2>Past JXLDS Highlights</h2>
          <div className="video-grid">
            <div className="video-card">
              <a
                href="https://youtu.be/vSLBwh1yRGY?si=XBue7w0dTx8rI7Ny"
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                <img
                  src="https://img.youtube.com/vi/vSLBwh1yRGY/maxresdefault.jpg"
                  alt="JXLDS 13.0 Aftermovie"
                  className="video-thumbnail"
                />
                <div className="play-overlay">
                  <svg width="68" height="48" viewBox="0 0 68 48">
                    <path
                      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                      fill="#f00"
                    ></path>
                    <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                  </svg>
                </div>
                <div className="video-title">JXLDS 13.0 Aftermovie</div>
              </a>
            </div>
            <div className="video-card">
              <a
                href="https://youtu.be/TDn2akRyjys?si=2hPzL_sEHBwJxbNL"
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                <img
                  src="https://img.youtube.com/vi/TDn2akRyjys/maxresdefault.jpg"
                  alt="JXLDS 12.0 Aftermovie"
                  className="video-thumbnail"
                />
                <div className="play-overlay">
                  <svg width="68" height="48" viewBox="0 0 68 48">
                    <path
                      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                      fill="#f00"
                    ></path>
                    <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                  </svg>
                </div>
                <div className="video-title">JXLDS 12.0 Aftermovie</div>
              </a>
            </div>
            <div className="video-card">
              <a
                href="https://youtu.be/QEYeNG2-c18?si=MyeOC_FCqut7GIYA"
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                <img
                  src="https://img.youtube.com/vi/QEYeNG2-c18/maxresdefault.jpg"
                  alt="JXLDS 11.0 Aftermovie"
                  className="video-thumbnail"
                />
                <div className="play-overlay">
                  <svg width="68" height="48" viewBox="0 0 68 48">
                    <path
                      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                      fill="#f00"
                    ></path>
                    <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                  </svg>
                </div>
                <div className="video-title">JXLDS 11.0 Aftermovie</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Take the Lead?</h2>
          <p>Join JXLDS 14.0 and embark on your leadership journey</p>
          <a href="/register" className="btn btn-primary">
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
