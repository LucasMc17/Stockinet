import { useLoggedOutRedirect } from "../../hooks";
import PatternHeader from "./PatternHeader.jsx";
import PatternImages from "./PatternImages.jsx";
import Slider from "../Slider.jsx";
import Gauge from "../Gauge/index.jsx";
import InteractiveGrid from "../InteractiveGrid/index.jsx";
import "./FullPattern.module.scss";

export default function FullPattern({ currentPattern }) {
  useLoggedOutRedirect();
  const images = [currentPattern.leadImage, ...currentPattern.images];

  return (
    <section id="pattern">
      <PatternHeader
        title={currentPattern.title}
        author={currentPattern.author}
        difficulty={currentPattern.difficulty}
      />
      <div className="pattern-splashscreen">
        <PatternImages
          images={images}
          description={currentPattern.description}
        />
        <div className="card">
          <h3>What you'll need</h3>
          {/* <ul>
            {currentPattern.materials.map((mat) => (
              <li>
                {mat.name}
                {mat.quantity && `: ${mat.quantity}`}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="card">
          <h3>The gauge</h3>
          <Gauge
            data={{
              widthInches: currentPattern.gaugeWidthInches,
              heightInches: currentPattern.gaugeHeightInches,
              rows: currentPattern.gaugeRows,
              stitches: currentPattern.gaugeStitches,
            }}
          />
        </div>
      </div>
      <div className="pattern-instructions">
        <div className="card">
          {/* {currentPattern.instructions.map((step) => (
            <p>{step}</p>
          ))} */}
        </div>
        <div className="card">
          <Slider>
            {currentPattern?.grids?.length &&
              currentPattern.grids.map((grid) => (
                <InteractiveGrid
                  data={JSON.parse(grid.data)}
                  gridName={grid.name}
                />
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
