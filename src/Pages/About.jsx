import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

function About() {
  return (
    <>
      <header>

        <div className="about-header">

          <Link to="/" className="logo">
            <img src={logo} alt="SVES Logo" />
          </Link>

          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>

        </div>

      </header>

      <section className="about-page">

        <div className="about-container">

          <h1>About Sri Vashistha Engineering Services</h1>

          <h3>Established in 2015</h3>

          <br />

          <h2>Company Overview</h2>

          <br />

          <p>
            Sri Vashistha Engineering Services (SVES) is a leading engineering
            services company providing comprehensive Operation & Maintenance
            (O&M), Plant Commissioning, Shutdown Maintenance, Equipment
            Overhauling, Mechanical Services and Technical Manpower Solutions
            for the power generation, steel, pellet, cement, process and
            manufacturing industries.

            <br />
            <br />

            With a team of experienced engineers, supervisors, operators and
            skilled technicians, SVES delivers reliable engineering solutions
            that enhance plant performance, maximize equipment reliability and
            ensure safe, uninterrupted operations.

            <br />
            <br />

            We are committed to delivering high-quality services through
            technical excellence, disciplined project execution, strict
            adherence to safety standards and a customer-focused approach.
          </p>

          <br />

          <h2>Our Service Portfolio</h2>

          <br />

          <ul>

            <li>Operation & Maintenance (O&M) of Captive and Utility Power Plants</li>

            <li>Boiler, Turbine & Generator (BTG) Operations and Maintenance</li>

            <li>Steam Turbine, Gearbox & Generator Overhauling</li>

            <li>Mechanical Installation, Erection & Commissioning</li>

            <li>Shutdown, Preventive & Breakdown Maintenance</li>

            <li>Plant Utilities Operation & Maintenance</li>

            <li>Equipment Alignment, Inspection & Condition Assessment</li>

            <li>Skilled Technical Manpower Supply and Project Support</li>

          </ul>

          <br />

          <h2>Industries We Serve</h2>

          <br />

          <ul>

            <li>Captive Power Plants</li>

            <li>Thermal Power Plants</li>

            <li>Pellet Plants</li>

            <li>Plywood & Process Industries</li>

            <li>Chemical & Manufacturing Industries</li>

            <li>Industrial Utility Plants</li>

          </ul>

          <br />

          <p>

            <strong>
              At Sri Vashistha Engineering Services, we don't just maintain
              plants—we improve their reliability, efficiency and performance
              through engineering excellence and trusted partnerships.
            </strong>

          </p>

        </div>

      </section>
    </>
  );
}

export default About;