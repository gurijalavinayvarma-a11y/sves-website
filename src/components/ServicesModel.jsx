import { useEffect } from "react";
import logo from "../assets/images/logo.jpeg";

function ServicesModal({ isOpen, onClose }) {
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

          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="modal-body">
          <h1>OUR SERVICES</h1>

          <ul>
            
            <li>Erection</li>
            <li>Commissioning</li>
            <li>Testing</li>
            <li>Overhauling</li>
            <li>Maintenance</li>
            <li>Renovation</li>
            
            <li>Annual O&M Contracts of Total Power, Chemical & Process Plants</li>
            <li>Typical Spares like Nozzles, Blades, Governing Systems, etc.</li>
            <li>Utility Services – Chillers, VAM, AHU, Boilers, WTP, Air Compressors, O&M</li>
            <li>Boiler Feed Pumps Overhauling</li>
            <li>Mechanical Maintenance Services</li>
            <li>Shutdown & Breakdown Maintenance</li>
            <li>Skilled Manpower Supply</li>
            <li>Equipment Operation & Maintenance</li>
            <li>Industrial Utility Management</li>
            <li>Power Plant Operation & Maintenance (O&M)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesModal;