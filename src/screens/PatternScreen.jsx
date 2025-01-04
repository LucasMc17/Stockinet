import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InteractiveGrid,
  Gauge,
  Slider,
  LoadingScreen,
  ErrorScreen,
  PatternHeader,
  PatternImages,
} from "../components";
import "./PatternScreen.module.scss";
import {
  fetchOnePattern,
  selectPattern,
} from "../@redux/reducers/Patterns/PatternSlice.js";
import { useLoggedOutRedirect } from "../hooks";

export default function PatternScreen() {
  useLoggedOutRedirect();
  const dispatch = useDispatch();
  const { patternId } = useParams();
  const { currentPattern, patternList, loading, error } = useSelector(
    (s) => s.patterns,
  );

  useEffect(() => {
    // Caching solution (needs update eventually)
    // const pattern = patternList.find((pat) => {
    //   return pat.id === Number(patternId);
    // });
    // console.log(pattern);
    // if (pattern?.fullyLoaded) {
    //   dispatch(selectPattern(pattern));
    // } else {
    dispatch(fetchOnePattern(patternId));
    // }
  }, []);

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
  }
}
