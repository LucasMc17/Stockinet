import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectPattern,
  fetchPatternsByUser,
} from "../@redux/reducers/Patterns/PatternSlice.js";
import { Link } from "react-router-dom";
import { useLoggedOutRedirect } from "../hooks";
import { LoadingScreen, ErrorScreen } from "../components";

export default function OwnedPatternsScreen() {
  useLoggedOutRedirect();

  const dispatch = useDispatch();
  const { patternList, loading, error } = useSelector((s) => s.patterns);

  useEffect(() => {
    dispatch(fetchPatternsByUser());
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
          <Link to={`/pattern/${patternId}`}>
            <h1>{patternList[patternId].title}</h1>
          </Link>
        ))}
      </div>
    );
  }
}
