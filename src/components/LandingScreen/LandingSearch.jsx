import "./LandingSearch.module.scss";
import DropDown from "../Inputs/DropDown.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingSearch() {
  const [searchState, setSearchState] = useState({
    patternType: {
      name: "Scarf",
      value: "scarf",
    },
    difficulty: {
      name: "Beginner",
      value: "BEGINNER",
    },
    priceRange: {
      name: "Free",
      value: "free",
    },
  });

  const patternTypes = [
    {
      name: "Scarf",
      value: "scarf",
    },
    {
      name: "Sweater",
      value: "sweater",
    },
    {
      name: "Hat",
      value: "hat",
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
    <section id="landing-search">
      <h3>Pattern Search</h3>
      <div className="landing-search-menu menu">
        <h4>Lorem ipsum dolor sit amet!</h4>
        <div className="landing-search-filters">
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
        </div>
        <div className="right-button">
          <button>Search</button>
        </div>
      </div>
      <p id="to-all-patterns">
        Already have something in mind?{" "}
        <Link to="/patterns">See All Patterns</Link>
      </p>
    </section>
  );
}
