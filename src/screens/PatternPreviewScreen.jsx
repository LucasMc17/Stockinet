import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchPatternPreview,
  selectPattern,
} from "../@redux/reducers/Patterns/PatternSlice";
import {
  LoadingScreen,
  ErrorScreen,
  PatternHeader,
  PatternImages,
} from "../components";
import "./PatternPreviewScreen.module.scss";

export default function PatternPreviewScreen() {
  const { patternSlug } = useParams();
  const dispatch = useDispatch();
  const { currentPattern, loading, error } = useSelector((s) => s.patterns);

  useEffect(() => {
    dispatch(fetchPatternPreview(patternSlug));
    return () => {
      dispatch(selectPattern(null));
    };
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
        <div className="pattern-previewscreen">
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
        </div>
      </section>
    );
  }
}
