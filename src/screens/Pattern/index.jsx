import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InteractivePattern from "../../components/InteractivePattern/index.jsx";
import Gauge from "../../components/Gauge/index.jsx";
import "./index.module.scss";
import Slider from "../../components/Slider/index.jsx";
import {
  fetchOnePattern,
  selectPattern,
} from "../../@redux/reducers/Patterns/PatternSlice.js";

export default function PatternScreen() {
  UseLoggedOutRedirect();

  const dispatch = useDispatch();
  const { patternId } = useParams();

  const { currentPattern, patternList } = useSelector((s) => s.patterns);

  useEffect(() => {
    console.log(
      patternList,
      patternList?.[patternId],
      patternList?.[patternId]?.fullyLoaded,
    );
    if (
      patternList &&
      patternList[patternId] &&
      patternList[patternId].fullyLoaded
    ) {
      dispatch(selectPattern(patternList[patternId]));
    } else {
      dispatch(fetchOnePattern(patternId));
    }
  }, [patternList]);

  if (currentPattern) {
    const images = [currentPattern.leadImage, ...currentPattern.images];

    return (
      <section id="pattern">
        <div className="pattern-header card">
          <h1>{currentPattern.title}</h1>
          <div>
            <h3>by {currentPattern.author}</h3>
            <h3>Skill Level: {currentPattern.difficulty}</h3>
          </div>
        </div>
        <div className="pattern-splashscreen">
          <div className="card">
            <Slider>
              {images.map((image) => (
                <img src={image} />
              ))}
            </Slider>
            {images.length > 0 && <Link to="">Enlarge</Link>}
            <p>{currentPattern.description}</p>
          </div>
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
              {currentPattern.grids.map((grid) => (
                <InteractivePattern data={grid.gridRows} gridName={grid.name} />
              ))}
            </Slider>
            {/* <InteractivePattern data={exampleData} />
            <InteractivePattern data={exampleDataTwo} /> */}
          </div>
        </div>
      </section>
    );
  } else {
    return <h1>404</h1>;
  }

  return <></>;
}
