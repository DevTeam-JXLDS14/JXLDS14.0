import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>JXLDS 14.0</h3>
          <p>A 2-day leadership conference by AIESEC in University of Sri Jayewardenepura</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/organizing-committee">OC Team</a></li>
            <li><a href="/facilitators">Facilitators</a></li>
            <li><a href="/store">Store</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@jxlds.com</p>
          <p>Phone: +94 XX XXX XXXX</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 JXLDS 14.0. All rights reserved. | Organized by AIESEC in University of Sri Jayewardenepura</p>
      </div>
    </footer>
  );
}

export default Footer;
