import { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/images/logo.jpeg";

function WhyChooseModal({ isOpen, onClose }) {
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

  const [activeTab, setActiveTab] = useState("overview");

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

          <div className="why-buttons">

            <button
              className="why-btn stats-btn"
              onClick={() => setActiveTab("overview")}
            >
              🏠 Overview
            </button>

            <button
              className="why-btn stats-btn"
              onClick={() => setActiveTab("stats")}
            >
              🏆 Company Stats
            </button>

            <button
              className="why-btn review-btn"
              onClick={() => setActiveTab("reviews")}
            >
              ⭐ Client Reviews
            </button>

          </div>

         {activeTab === "overview" && (
  <div>

    <h1>Why Choose SVES?</h1>

    <p>
      Sri Vashistha Engineering Services is a dynamic, team-oriented, and
      performance-driven engineering organization specializing in
      <strong> Operation &amp; Maintenance (O&amp;M) Services</strong> for
      Thermal Power Plants, Process Plants, and Industrial Facilities.
    </p>

    <p>
      With extensive expertise in Mechanical and Electrical Engineering,
      we deliver safe, reliable, and cost-effective engineering solutions
      that enhance plant performance and operational efficiency.
    </p>

    <p>
      Our experienced professionals possess strong leadership, technical
      expertise, and project management capabilities, enabling us to
      improve productivity, maintain high-quality standards, reduce
      operational costs, and minimize rework.
    </p>

    <p>
      We are supported by qualified technical personnel, including
      <strong> A-Grade 33 kV Electrical License Holders</strong>,
      ensuring compliance with statutory regulations while maintaining
      the highest standards of safety and operational excellence.
    </p>

    <p>
      Through our customer-focused approach and commitment to continuous
      improvement, we strive to be a trusted partner in delivering
      sustainable, efficient, and high-quality engineering services.
    </p>

    <h2>Turnkey Services (Power Plants)</h2>

    <ul>
      <li>✔ Pipe Line Erection (SS, CS &amp; Water Lines)</li>
      <li>✔ Erection, Commissioning &amp; Testing Services</li>
      <li>✔ Operation &amp; Maintenance (O&amp;M) Services</li>
      <li>✔ Preventive, Corrective &amp; Breakdown Maintenance Services</li>
      <li>✔ Renovation &amp; Modernization</li>
    </ul>

    <h2>Health, Safety &amp; Environment (HSE)</h2>

    <p>
      Sri Vashistha Engineering Services places the highest priority on
      Health, Safety, and Environmental Protection. All activities are
      carried out in accordance with applicable safety standards and
      industry best practices to ensure a safe working environment.
    </p>

    <h2>Quality Policy</h2>

    <p>
      We are committed to providing services that consistently meet
      customer requirements and exceed expectations through continuous
      improvement, employee development, and adherence to quality
      standards.
    </p>

  </div>
)}
          {activeTab === "stats" && (

            <div>

              <h1>Company Statistics</h1>

              <p>🏆 11+ Years Experience</p>

              <p>⚙️ 7 Projects Completed</p>

              <p>👷 Skilled Engineers</p>

              <p>🛡️ Safety First</p>

            </div>

          )}

          {activeTab === "reviews" && (

            <div>

              <h1>Client Reviews</h1>

              <p>⭐⭐⭐⭐⭐ Excellent Service</p>

              <p>⭐⭐⭐⭐⭐ Professional Team</p>

              <p>⭐⭐⭐⭐⭐ High Quality Work</p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default WhyChooseModal;