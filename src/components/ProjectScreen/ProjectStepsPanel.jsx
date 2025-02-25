import { Slider } from "../";
import "./ProjectStepsPanel.module.scss";

export default function ProjectStepsPanel({ stepSections }) {
  return (
    <section className="card project-panel steps-panel">
      <Slider>
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
