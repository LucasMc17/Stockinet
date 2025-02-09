import "./HeroImages.module.scss";
import { useState } from "react";
import Modal from "react-modal";
import Slider from "../Slider.jsx";

Modal.setAppElement("#root");

export default function HeroImages({ images, limit }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="hero-images">
      <div className="hero-image-holder">
        {images.slice(0, limit).map((image) => (
          <div>
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
      <Modal isOpen={modalOpen}>
        <Slider>
          {images.map((image) => (
            <div className="modal-image">
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
