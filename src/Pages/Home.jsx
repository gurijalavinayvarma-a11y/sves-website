import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseModal from "../components/WhyChooseModal";
import ContactModal from "../components/ContactModal";
import ProjectModal from "../components/ProjectModal";
import ServicesModal from "../components/ServicesModel";


//import Footer from "../components/Footer";

function Home() {
  const [showWhyModal, setShowWhyModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
const [showServicesModal, setShowServicesModal] = useState(false);
  return (
    <>
      <Navbar
        openWhyModal={() => setShowWhyModal(true)}
        openProjectsModal={() => setShowProjectModal(true)}
        openContactModal={() => setShowContactModal(true)}
      />

      <Hero openServicesModal={() => setShowServicesModal(true)} />

      <About />

      <WhyChooseModal
        isOpen={showWhyModal}
        onClose={() => setShowWhyModal(false)}
      />

      <ProjectModal
        isOpen={showProjectModal}
        onClose={() => setShowProjectModal(false)}
      />

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
      <ServicesModal
  isOpen={showServicesModal}
  onClose={() => setShowServicesModal(false)}
/>

    
    </>
  );
}

export default Home;