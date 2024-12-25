import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllPatterns,
  selectPattern,
} from "../../@redux/reducers/Patterns/PatternSlice";
import { Link } from "react-router-dom";
import UseLoggedOutRedirect from "../../hooks/UseLoggedOutRedirect";

export default function Patterns() {
  UseLoggedOutRedirect();

  const dispatch = useDispatch();
  const patterns = useSelector((s) => s.patterns.patternList);

  useEffect(() => {
    dispatch(fetchAllPatterns());
    dispatch(selectPattern(null));
  }, []);

  if (!patterns) {
    return <></>;
  }

  return (
    <div className="card">
      {Object.keys(patterns).map((patternId) => (
        <Link to={`/pattern/${patternId}`}>
          <h1>{patterns[patternId].title}</h1>
        </Link>
      ))}
    </div>
  );
}
