import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchAllPatterns,
  selectPattern,
} from "../@redux/reducers/Patterns/PatternSlice.js";
import {
  LoadingScreen,
  ErrorScreen,
  PatternCard,
  PatternSearch,
} from "../components";
import "./AllPatternsScreen.module.scss";

export default function AllPatternsScreen() {
  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const difficulty = params.get("difficulty");
  const { patternList, loading, error } = useSelector((s) => s.patterns);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(selectPattern(null));
  }, []);

  useEffect(() => {
    dispatch(fetchAllPatterns({ method: "purchases", page, type, difficulty }));
  }, [page, type, difficulty]);

  function nextPage(e) {
    setPage(page + 1);
  }

  function prevPage(e) {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  if (patternList) {
    return (
      <>
        <PatternSearch patternPage={true} />
        <div>
          <button onClick={prevPage}>{"<"}</button>
          <p>{page}</p>
          <button onClick={nextPage}>{">"}</button>
        </div>
        <div className="pattern-list all-patterns-list">
          {patternList.map((pattern, i) => (
            <PatternCard
              key={i}
              title={pattern.title}
              image={pattern.leadImage}
              description={pattern.description}
              link={`/pattern/preview/${pattern.id}`}
            />
          ))}
        </div>
      </>
    );
  }
}
