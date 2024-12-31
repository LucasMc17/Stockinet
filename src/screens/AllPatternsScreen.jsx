import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllPatterns,
  selectPattern,
} from "../@redux/reducers/Patterns/PatternSlice.js";
import { Link } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen/index.jsx";
import ErrorScreen from "../components/ErrorScreen/index.jsx";

export default function AllPatternsScreen() {
  const dispatch = useDispatch();
  const { patternList, loading, error } = useSelector((s) => s.patterns);

  useEffect(() => {
    dispatch(fetchAllPatterns());
    dispatch(selectPattern(null));
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  if (patternList) {
    return (
      <div className="card">
        {Object.keys(patternList).map((patternId) => (
          <Link to={`/pattern/preview/${patternId}`}>
            <h1>{patternList[patternId].title}</h1>
          </Link>
        ))}
      </div>
    );
  }
}
