import "./HeroImages.module.scss";

export default function HeroImages({ images, limit }) {
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
        <button>See All ({images.length})</button>
      </div>
    </section>
  );
}
