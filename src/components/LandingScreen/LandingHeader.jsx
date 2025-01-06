import "./LandingHeader.module.scss";

export default function LandingHeader() {
  return (
    <section className="landing-header">
      <div className="landing-header-hero">
        <h1>Welcome to Stockinette!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
      </div>
      <div className="landing-header-image placeholder-image">
        <img src="/public/placeholder.webp" />
      </div>
    </section>
  );
}
