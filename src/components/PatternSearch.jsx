import DropDown from "./Inputs/DropDown.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./PatternSearch.module.scss";
import { useDispatch } from "react-redux";
import { fetchAllPatterns } from "../@redux/reducers/Patterns/PatternSlice.js";

export default function PatternSearch({ patternPage }) {
  const dispatch = useDispatch();

  const [searchState, setSearchState] = useState({
    patternType: {
      name: "Scarf",
      value: "SCARF",
    },
    difficulty: {
      name: "Beginner",
      value: "BEGINNER",
    },
    priceRange: {
      name: "Free",
      value: "free",
    },
    sortBy: {
      name: "Most Popular",
      value: "purchases",
    },
  });

  const sortTypes = [
    {
      name: "Most Popular",
      value: "purchases",
    },
    {
      name: "Newest",
      value: "recency",
    },
  ];

  const patternTypes = [
    {
      name: "Scarf",
      value: "SCARF",
    },
    {
      name: "Sweater",
      value: "SWEATER",
    },
    {
      name: "Hat",
      value: "HAT",
    },
  ];

  const difficulties = [
    {
      name: "Beginner",
      value: "BEGINNER",
    },
    {
      name: "Intermediate",
      value: "INTERMEDIATE",
    },
    {
      name: "Expert",
      value: "EXPERT",
    },
  ];

  const priceRanges = [
    {
      name: "Free",
      value: "free",
    },
    {
      name: "Under $10",
      value: "<10",
    },
    {
      name: "$10 and up",
      value: ">10",
    },
  ];

  return (
    <div className="pattern-search-menu menu">
      <h4>Lorem ipsum dolor sit amet!</h4>
      <div className="pattern-search-filters">
        <DropDown
          name="Pattern type"
          options={patternTypes}
          onSelect={(selected) => {
            setSearchState({ ...searchState, patternType: selected });
          }}
        />
        <DropDown
          name="Difficulty"
          options={difficulties}
          onSelect={(selected) => {
            setSearchState({ ...searchState, difficulty: selected });
          }}
        />
        <DropDown
          name="Price Range"
          options={priceRanges}
          onSelect={(selected) => {
            setSearchState({ ...searchState, priceRange: selected });
          }}
        />
        {patternPage && (
          <DropDown
            name="Sort By"
            options={sortTypes}
            onSelect={(selected) => {
              setSearchState({ ...searchState, sortBy: selected });
            }}
          />
        )}
      </div>
      <div className="right-button">
        {patternPage ? (
          <button
            onClick={() => {
              dispatch(
                fetchAllPatterns({
                  method: searchState.sortBy.value,
                  page: 1,
                  type: searchState.patternType.value,
                  difficulty: searchState.difficulty.value,
                }),
              );
            }}
          >
            Search
          </button>
        ) : (
          <Link
            to={`/patterns?type=${searchState.patternType.value}&difficulty=${searchState.difficulty.value}`}
          >
            <button>Search</button>
          </Link>
        )}
      </div>
    </div>
  );
}
