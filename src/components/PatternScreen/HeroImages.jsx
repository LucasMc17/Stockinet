import "./HeroImages.module.scss";
import { useState } from "react";
import Modal from "react-modal";
import Slider from "../Slider.jsx";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    overflowX: "hidden",
  },
};

export default function HeroImages({ images, limit }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="hero-images">
      <div className="hero-image-holder">
        {images.slice(0, limit).map((image, i) => (
          <div key={i}>
            <img src={image} />
          </div>
        ))}
      </div>
      <div className="hero-image-shadow">
        <button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          See All ({images.length})
        </button>
      </div>
      <Modal isOpen={modalOpen} style={customStyles}>
        <Slider>
          {images.map((image, i) => (
            <div className="modal-image" key={i}>
              <img src={image} />
            </div>
          ))}
        </Slider>
        <button
          id="image-close-button"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          Close
        </button>
      </Modal>
    </section>
  );
}
