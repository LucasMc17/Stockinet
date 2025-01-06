import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchAllPatterns,
  selectPattern,
} from "../@redux/reducers/Patterns/PatternSlice.js";
import { LoadingScreen, ErrorScreen } from "../components";
import { PatternCard } from "../components";
import "./AllPatternsScreen.module.scss";

export default function AllPatternsScreen() {
  const dispatch = useDispatch();
  const { patternList, loading, error } = useSelector((s) => s.patterns);
  const [method, setMethod] = useState("purchases");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(selectPattern(null));
  }, []);

  useEffect(() => {
    dispatch(fetchAllPatterns({ method, page }));
  }, [method, page]);

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
        <select
          value={method}
          onChange={(e) => {
            setMethod(e.target.value);
          }}
        >
          <option value="recency">Newest</option>
          <option value="purchases">Most Popular</option>
        </select>
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
