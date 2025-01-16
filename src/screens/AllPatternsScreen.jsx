import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchAllPatterns,
  selectPattern,
  clearPages,
  setPage,
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
  const { patternList, loading, error, maxPages, pages, currentPage } =
    useSelector((s) => s.patterns);

  useEffect(() => {
    dispatch(selectPattern(null));
    return () => {
      console.log("RUNNING!!!");
      dispatch(clearPages());
    };
  }, []);

  useEffect(() => {
    if (!pages[currentPage]) {
      dispatch(
        fetchAllPatterns({
          method: "purchases",
          page: currentPage,
          type,
          difficulty,
        }),
      );
    }
  }, [currentPage, type, difficulty]);

  function nextPage(e) {
    if (maxPages > currentPage) {
      dispatch(setPage(currentPage + 1));
    }
  }

  function prevPage(e) {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  }

  if (patternList) {
    return (
      <>
        <PatternSearch patternPage={true} />
        {loading ? (
          <LoadingScreen />
        ) : error ? (
          <ErrorScreen />
        ) : (
          <>
            <div>
              <button disabled={currentPage <= 1} onClick={prevPage}>
                {"<"}
              </button>
              <p>{currentPage}</p>
              <button disabled={currentPage >= maxPages} onClick={nextPage}>
                {">"}
              </button>
            </div>
            <div className="pattern-list all-patterns-list">
              {pages[currentPage] &&
                pages[currentPage].map((pattern, i) => (
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
        )}
      </>
    );
  }
}
