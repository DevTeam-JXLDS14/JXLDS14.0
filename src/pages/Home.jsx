import "./Home.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faClock,
  faHandshake,
  faGlobe,
  faMicrophone,
  faScroll,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2026-01-24T00:08:00").getTime();
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
          <img
            src="/images/14.0 Yellow.webp"
            alt="JXLDS 14.0"
            className="hero-logo"
          />
          <p className="hero-subtitle">Jayewardenepura Exchange Leadership Development Seminar</p>
          <p className="hero-description">
            The Annual 2-day Leadership Conference Organized by AIESEC in University of Sri
            Jayewardenepura.</p>
          <div className="hero-buttons">
            <a href="/register" className="btn btn-primary">
              Register Now
            </a>
            <a
              href="#about"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Learn More
            </a>
          </div>

          {/* Countdown Timer */}
          <div className="countdown-timer">
            <h2 className="countdown-title">Event Starts In</h2>
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

          {/* Event Details */}
          <div className="event-details-boxes">
            <div className="event-detail-box">
              <span className="event-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </span>
              <span className="event-label">Date</span>
              <span className="event-value">Jan 24-25, 2026</span>
            </div>
            <div className="event-detail-box">
              <span className="event-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <span className="event-label">Venue</span>
              <span className="event-value">TBA</span>
            </div>
            <div className="event-detail-box">
              <span className="event-icon">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span className="event-label">Duration</span>
              <span className="event-value">2 Days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Reveal */}
      <section className="reveal-section">
        <div className="container">
          <h2>Reveal of JXLDS 14.0</h2>
          <div className="video-grid">
            <div className="video-card">
              {playingVideo === "ldT5qzGg9-o" ? (
                <div className="video-iframe-container">
                  <iframe
                    src="https://www.youtube.com/embed/ldT5qzGg9-o?autoplay=1"
                    title="JXLDS 14.0 | Event and Organizing Committee Reveal"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="video-link" style={{ cursor: "pointer" }} onClick={() => setPlayingVideo("ldT5qzGg9-o")}>
                  <img
                    src="https://img.youtube.com/vi/ldT5qzGg9-o/maxresdefault.jpg"
                    alt="JXLDS 14.0 | Event and Organizing Committee Reveal"
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
                  <div className="video-title">JXLDS 14.0 | Event and Organizing Committee Reveal</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About JXLDS Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About JXLDS 14.0</h2>
          <p>
            JXLDS (Jayewardenepura Exchange Leadership Development Seminar) is AIESEC in USJ's flagship leadership conference. This intensive 2-day program develops leadership potential through interactive workshops, insightful sessions, and valuable networking.
          </p>
          <p>
            Join us for a transformative experience that will equip you with essential leadership skills, broaden your perspectives, and connect you with passionate individuals committed to making a positive impact.
          </p>

          <div className="expect-grid">
            <div className="expect-card">
              <div className="expect-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3>Interactive Workshops</h3>
              <p>Engage in hands-on leadership training</p>
            </div>
            <div className="expect-card">
              <div className="expect-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h3>Networking</h3>
              <p>Connect with like-minded peers</p>
            </div>
            <div className="expect-card">
              <div className="expect-icon">
                <FontAwesomeIcon icon={faMicrophone} />
              </div>
              <h3>Expert Sessions</h3>
              <p>Learn from industry leaders</p>
            </div>
            <div className="expect-card">
              <div className="expect-icon">
                <FontAwesomeIcon icon={faScroll} />
              </div>
              <h3>Certification</h3>
              <p>Receive a certificate of participation</p>
            </div>
            <div className="expect-card">
              <div className="expect-icon">
                <FontAwesomeIcon icon={faUtensils} />
              </div>
              <h3>All Inclusive</h3>
              <p>Meals & refreshments provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Aftermovies Section */}
      <section className="aftermovies-section">
        <div className="container">
          <h2>Past JXLDS Highlights</h2>
          <div className="video-grid">
            <div className="video-card">
              {playingVideo === "vSLBwh1yRGY" ? (
                <div className="video-iframe-container">
                  <iframe
                    src="https://www.youtube.com/embed/vSLBwh1yRGY?autoplay=1"
                    title="JXLDS 13.0 Aftermovie"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="video-link" style={{ cursor: "pointer" }} onClick={() => setPlayingVideo("vSLBwh1yRGY")}>
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
                </div>
              )}
            </div>
            <div className="video-card">
              {playingVideo === "TDn2akRyjys" ? (
                <div className="video-iframe-container">
                  <iframe
                    src="https://www.youtube.com/embed/TDn2akRyjys?autoplay=1"
                    title="JXLDS 12.0 Aftermovie"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="video-link" style={{ cursor: "pointer" }} onClick={() => setPlayingVideo("TDn2akRyjys")}>
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
                </div>
              )}
            </div>
            <div className="video-card">
              {playingVideo === "QEYeNG2-c18" ? (
                <div className="video-iframe-container">
                  <iframe
                    src="https://www.youtube.com/embed/QEYeNG2-c18?autoplay=1"
                    title="JXLDS 11.0 Aftermovie"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="video-link" style={{ cursor: "pointer" }} onClick={() => setPlayingVideo("QEYeNG2-c18")}>
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
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Take the Lead?</h2>
          <p>Join JXLDS 14.0 and embark on your leadership journey</p>
          <a href="/register" className="btn btn-secondary">
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
