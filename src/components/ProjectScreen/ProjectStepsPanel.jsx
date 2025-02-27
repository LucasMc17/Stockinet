import Slider from "../Slider.jsx";
import "./ProjectStepsPanel.module.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProjectStepsPanel({ stepSections }) {
  const { currentSize } = useSelector((s) => s.workspace);
  const [resetCount, setResetCount] = useState(0);

  useEffect(() => {
    setResetCount(resetCount + 1);
  }, [currentSize]);

  return (
    <section className="card project-panel steps-panel">
      <Slider resetCount={resetCount}>
        {stepSections.map((section) => (
          <div>
            <h1>{section.name}</h1>
            <ol>
              {section.steps.map((step) => (
                <li>{step.text}</li>
              ))}
            </ol>
          </div>
        ))}
      </Slider>
    </section>
  );
}
