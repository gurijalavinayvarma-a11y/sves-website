import background from "../assets/images/background.png";

function Hero({ openServicesModal }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${background})`,
      }}
    >
      <div className="hero-content">
        <h3>SRI VASHISTHA ENGINEERING SERVICES</h3>

        

        <p>
          Delivering reliable engineering services in Thermal Power Plants,
          Industrial Maintenance, EPC Services and Electrical Infrastructure.
        </p>
<button className="btn" onClick={openServicesModal}>
  Explore Our Services
</button>
      </div>
    </section>
  );
}

export default Hero;