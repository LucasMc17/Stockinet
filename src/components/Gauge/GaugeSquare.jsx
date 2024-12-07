import "./GaugeSquare.module.scss";

export default function GaugeSquare({ width, height }) {
  return (
    <div
      className="gauge-square"
      style={{ paddingTop: (height / width) * 100 + "%" }}
    ></div>
  );
}
