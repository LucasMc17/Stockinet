import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InteractiveGrid from "../components/InteractiveGrid/index.jsx";
import Gauge from "../components/Gauge/index.jsx";
import "./PatternScreen.module.scss";
import Slider from "../components/Slider/index.jsx";
import {
  fetchOnePattern,
  selectPattern,
} from "../@redux/reducers/Patterns/PatternSlice.js";
import UseLoggedOutRedirect from "../hooks/UseLoggedOutRedirect.js";
import LoadingScreen from "../components/LoadingScreen/index.jsx";
import ErrorScreen from "../components/ErrorScreen/index.jsx";

export default function PatternScreen() {
  UseLoggedOutRedirect();

  const dispatch = useDispatch();
  const { patternId } = useParams();

  const { currentPattern, patternList, loading, error } = useSelector(
    (s) => s.patterns,
  );

  useEffect(() => {
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

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  if (currentPattern) {
    const images = [currentPattern.leadImage, ...currentPattern.images];

    return (
      <section id="pattern">
        <div className="pattern-header card">
          <h1>{currentPattern.title}</h1>
          <div>
            <h3>
              by{" "}
              <Link to={`/authors/${currentPattern.author.id}`}>
                {currentPattern.author.username}
              </Link>
            </h3>
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
  } else {
    return <h1>404</h1>;
  }
}
