import{ useEffect } from "react";
import logo from "../assets/images/logo.jpeg";

function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
  if (isOpen) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }

  return () => {
    document.body.classList.remove("modal-open");
  };
}, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="overlay">

      <div className="modal-full">

        <div className="modal-header">

          <img src={logo} alt="SVES Logo" className="modal-logo" />

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>

        </div>

        <div className="modal-body">

          <h1>Contact Us</h1>

          <p>We'd love to hear from you.</p>

          <div className="contact-grid">

            <div className="contact-card">

              <h3>📍 Address</h3>

              <p>
                Sri Vashistha Engineering Services
                <br />
                D.No: 15-110,
                <br />
                9th Line,
                <br />
                Chakkanagar,
                <br />
                Payakaraopeta (Mandal),
                <br />
                Anakapalli District,
                <br />
                Andhra Pradesh - 531127
              </p>

            </div>

            <div className="contact-card">

              <h3>📞 Phone</h3>

              <a href="tel:+919182423115">
                +91 9182423115
              </a>

            </div>

            <div className="contact-card">

              <h3>📧 Email</h3>

              <a href="mailto:svengg1977@gmail.com">
                svengg1977@gmail.com
              </a>

            </div>

          </div>

          <div className="map-container">

            <iframe
              src="https://maps.google.com/maps?hl=en&q=Payakaraopeta&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              title="Google Map"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

          <div className="contact-buttons">

            <a
              href="https://wa.me/919182423115"
              target="_blank"
              rel="noreferrer"
              className="contact-btn whatsapp"
            >
              💬 WhatsApp
            </a>

            <a
              href="mailto:svengg1977@gmail.com"
              className="contact-btn email"
            >
              📧 Email
            </a>

            <a
              href="tel:+919182423115"
              className="contact-btn call"
            >
              📞 Call
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=D.No.+15-110,+9th+Line,+Chakkanagar,+Payakaraopeta,+Anakapalli,+Andhra+Pradesh+531127"
              target="_blank"
              rel="noreferrer"
              className="contact-btn directions"
            >
              🧭 Get Directions
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ContactModal;