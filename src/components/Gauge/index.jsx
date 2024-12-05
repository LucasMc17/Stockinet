import GaugeSquare from "./GaugeSquare.jsx";
import "./index.module.scss";

export default function Gauge({ data }) {
  return (
    <div className="gauge-flex">
      <div className="gauge-holder">
        <GaugeSquare width={data.widthInches} height={data.heightInches} />
      </div>
      <div className="gauge-rows">
        <p>
          {data.rows} rows = {data.heightInches}"
        </p>
      </div>
      <div className="gauge-sts">
        <p>
          {data.stitches} sts = {data.widthInches}"
        </p>
      </div>
    </div>
  );
}
