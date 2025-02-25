import { useRef, useState, useEffect } from "react";
import anime from "animejs";
import "./Slider.module.scss";
import { ChevronLeft, ChevronRight } from "../icons";

export default function Slider({ children, startIndex = 0, resetCount = 0 }) {
  const [index, setIndex] = useState(startIndex);
  const ref = useRef(null);

  function handleSlide(newIndex) {
    anime({
      targets: ref.current,
      translateX: "calc(" + -100 * newIndex + "% - " + newIndex * 3 + "rem)",
      easing: "easeInOutSine",
      duration: 500,
    });
    setIndex(newIndex);
  }

  useEffect(() => {
    setIndex(startIndex);
  }, [resetCount]);

  useEffect(() => {
    handleSlide(index);
  }, [index]);

  return (
    <>
      <div className="slider-holder">
        <button
          className={`slider-back ${index === 0 ? "hidden" : ""}`}
          onClick={() => {
            const newIndex = index - 1;
            setIndex(newIndex);
          }}
        >
          <ChevronLeft stroke="black" />
        </button>
        <button
          className={`slider-forward ${
            index === children.length - 1 ? "hidden" : ""
          }`}
          onClick={() => {
            const newIndex = index + 1;
            setIndex(newIndex);
          }}
        >
          <ChevronRight stroke="black" />
        </button>
        <div ref={ref} className="slider">
          {children}
        </div>
        <p>
          {index + 1}/{children.length}
        </p>
      </div>
    </>
  );
}
