import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>JXLDS 14.0</h1>
          <p className="hero-subtitle">Empowering Leaders of Tomorrow</p>
          <p className="hero-description">
            A 2-day leadership conference by AIESEC in University of Sri Jayewardenepura
          </p>
          <div className="hero-buttons">
            <a href="/register" className="btn btn-primary">Register Now</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* About JXLDS Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About JXLDS 14.0</h2>
          <p>
            JXLDS (Junior Executive Leadership Development Seminar) is a flagship leadership conference
            organized by AIESEC in University of Sri Jayewardenepura. This 2-day intensive program is
            designed to develop the leadership potential of young individuals through interactive workshops,
            insightful sessions, and networking opportunities.
          </p>
          <p>
            Join us for an transformative experience that will equip you with essential leadership skills,
            broaden your perspectives, and connect you with like-minded individuals passionate about
            making a positive impact.
          </p>
        </div>
      </section>

      {/* Past Aftermovies Section */}
      <section className="aftermovies-section">
        <div className="container">
          <h2>Past JXLDS Highlights</h2>
          <div className="video-grid">
            <div className="video-card">
              <div className="video-placeholder">
                <p>JXLDS 13.0 Aftermovie</p>
                {/* Replace with actual YouTube embed */}
              </div>
            </div>
            <div className="video-card">
              <div className="video-placeholder">
                <p>JXLDS 12.0 Aftermovie</p>
                {/* Replace with actual YouTube embed */}
              </div>
            </div>
            <div className="video-card">
              <div className="video-placeholder">
                <p>JXLDS 11.0 Aftermovie</p>
                {/* Replace with actual YouTube embed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Take the Lead?</h2>
          <p>Join JXLDS 14.0 and embark on your leadership journey</p>
          <a href="/register" className="btn btn-primary">Register Now</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
