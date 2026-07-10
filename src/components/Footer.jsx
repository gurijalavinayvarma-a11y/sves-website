import logo from "../assets/images/logo.jpeg";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <img src={logo} alt="SVES Logo" className="footer-logo" />

          <h2>Sri Vashistha Engineering Services</h2>

          <p>
            Delivering reliable engineering services in Power Plants,
            Industrial Maintenance, EPC Projects, Plant Commissioning,
            Equipment Overhauling and Technical Manpower Solutions.
          </p>

        </div>

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="/">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#">Projects</a></li>

            <li><a href="#">Contact</a></li>

          </ul>

        </div>

        <div className="footer-section">

          <h3>Contact</h3>

          <p>📍 Payakaraopeta, Anakapalli</p>

          <p>📞 +91 9182423115</p>

          <p>📧 svengg1977@gmail.com</p>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Sri Vashistha Engineering Services. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;