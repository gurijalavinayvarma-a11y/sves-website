import { useEffect } from "react";
import { useState } from "react";

import logo from "../assets/images/logo.jpeg";
import projectImage from "../assets/images/hero.png";

import virajImg from "../assets/images/projects/viraj steel.jpg.jpeg";
import viraj1 from "../assets/images/projects/viraj.1.jpg.jpeg";
import viraj2 from "../assets/images/projects/viraj.2.jpg.jpeg";
import matharni1 from "../assets/images/projects/matharni.jpg.jpeg";
import matharni2 from "../assets/images/projects/matharni.2.jpg.jpeg";
import matharni3 from "../assets/images/projects/matharni.3.jpg.jpeg";
import matharni4 from "../assets/images/projects/matharni.4.jpg.jpeg";
import matharni5 from "../assets/images/projects/matharni.5.jpg.jpeg";
import matharni6 from "../assets/images/projects/matharni.6.jpg.jpeg";
import matharni7 from "../assets/images/projects/matharni.7.jpg.jpeg";
import matharni8 from "../assets/images/projects/matharni.8.jpg.jpeg";

import exciteImg from "../assets/images/projects/excite sjps.jpg.jpeg";
import bc3Img from "../assets/images/projects/BC-3 Dismantled conveyer.jpg";
import shahImg from "../assets/images/projects/shah sponge.jpg.jpeg";

function ProjectModal({ isOpen, onClose }) {
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
  const [showGallery, setShowGallery] = useState(false);
const [galleryProject, setGalleryProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);


  if (!isOpen) return null;

  const projects = [
    {
  image: virajImg,
  gallery: [viraj1, viraj2],
  name: "Viraj Steel & Energy Pvt Ltd",
  location: "Odisha",
  client: "Viraj Steel & Energy Pvt Ltd",
  scope: "O&M of 1x20 MW and 1x08 MW Power Plant",
  detailwork: "", // We'll add the client's matter here
  status: "Completed",
  button: true,
},
    {
      name: "Maa Tarini Steels LLP",
      images: [
        matharni1,
        matharni2,
        matharni3,
        matharni4,
        matharni5,
        matharni6,
        matharni7,
        matharni8,
      ],
      location: "Pandarsil, Odisha",
      client: "Maa Tarini Steels LLP",
      scope: "1x10 MW Thermal Power Plant O&M and Commissioning",
      detailwork:
        "Commissioning and Operation & Maintenance of 1x10 MW Thermal Power Plant.",
      status: "Running",
      button: true,
    },
    {
      image: shahImg,
      name: "Shah Sponge & Power Ltd",
      location: "Odisha",
      client: "Shah Sponge & Power Ltd",
      scope:
        "1x15 MW Thermal Power Plant Commissioning & Operation and Maintenance",
      detailwork:
        "1x15 MW Thermal Power Plant Commissioning and Operation & Maintenance completed.",
      status: "Completed",
    },
    {
      image: exciteImg,
      name: "Balaji Action Buildwell Ltd",
      location: "Achutapuram, Visakhapatnam",
      client: "Balaji Action Buildwell Ltd",
      scope: "68 MW Energy Plant O&M",
      status: "Running",
    },
    {
      name: "AG DSM Pumps Installation",
      location: "Andhra Pradesh",
      client: "Government Project",
      scope: "Installation of 1500 Pump Sets",
      status: "Completed",
    },
    {
      name: "Palasa Government Hospital",
      location: "Palasa, Andhra Pradesh",
      client: "Government Hospital",
      scope: "Electrical, Plumbing and Civil Works",
      status: "Completed",
    },
    {
      image: bc3Img,
      name: "BC-3 Dismantled Conveyor",
      location: "Gangakhed Sugar & Energy Ltd",
      client: "Gangakhed Sugar & Energy Ltd",
      scope: "BC-3 Dismantling Work",
      status: "Completed",
    },
  ];

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
          <h1>Our Projects</h1>

          <p>
            Successfully completed engineering projects across various
            industries.
          </p>

          {projects.map((project, index) => (
            <div className="project-card" key={index}>
             
              {project.images ? (
  <div className="project-images">
    {project.images.slice(0, 3).map((img, imgIndex) => (
      <img
        key={imgIndex}
        src={img}
        alt={`${project.name}-${imgIndex + 1}`}
        className="project-img"
        onClick={() => setSelectedImage(img)}
        style={{ cursor: "pointer" }}
      />
    ))}
  </div>
) : project.image ? (
  <img
    src={project.image}
    alt={project.name}
    className="project-img"
    onClick={() => setSelectedImage(project.image)}
    style={{ cursor: "pointer" }}
  />
) : null}

              <h2>{project.name}</h2>

              <p>
                <strong>📍 Location:</strong> {project.location}
              </p>

              <p>
                <strong>👤 Client:</strong> {project.client}
              </p>

              <p>
                <strong>⚙️ Scope:</strong> {project.scope}
              </p>

              {project.detailwork && (
                <p>
                  <strong>📝 Detailed Work:</strong>{" "}
                  {project.detailwork}
                </p>
              )}

              <p>
                <strong>✔ Status:</strong> {project.status}
              </p>

              {project.button && (
                <button
  className="see-more-btn"
  onClick={() => {
    setGalleryProject(project);
    setShowGallery(true);
  }}
>
  See More
</button>
              )}
            </div>
          ))}
        </div>

        {showGallery && (
          <div className="gallery-overlay">
            <div className="gallery-modal">
              <button
                className="close-btn"
                onClick={() => setShowGallery(false)}
              >
                ✖
              </button>

              <h2>{galleryProject?.name} - Project Gallery</h2>

              <div className="project-images">
  {(galleryProject?.gallery || galleryProject?.images?.slice(3) || []).map(
    (img, index) => (
      <img
        key={index}
        src={img}
        alt={`${galleryProject?.name} ${index + 1}`}
        className="project-img"
        onClick={() => setSelectedImage(img)}
        style={{ cursor: "pointer" }}
      />
    )
  )}
</div>
            </div>
          </div>
        )}

        {selectedImage && (
          <div
            className="image-popup-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="image-popup"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="image-close-btn"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>

              <img
                src={selectedImage}
                alt="Project"
                className="popup-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;