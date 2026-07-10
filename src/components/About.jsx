
import { Link } from "react-router-dom";


function About() {
  
  return (
    <section className="about" id="about">

      <div className="about-container">

        <h5>ABOUT US</h5>

        <h2>Sri Vashistha Engineering Services</h2>

        <h4>Established in 2015</h4>

        <p className="experience">
          <strong>11+ Years of Industry Experience</strong>
        </p>

        <p>
          Sri Vashistha Engineering Services (SVES), established in 2015,
          is a trusted engineering company providing reliable engineering
          solutions in Thermal Power Plants, Industrial Maintenance,
          EPC Services, Plant Commissioning, Operation & Maintenance,
          Equipment Overhauling and Technical Manpower Support.
        </p>

        <Link to="/about" className="btn">
          Know More
        </Link>

      </div>

    </section>
  );
}

export default About;