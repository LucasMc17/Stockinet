import Slider from "../Slider.jsx";
import InteractiveGrid from "../InteractiveGrid/index.jsx";
import "./ProjectGridPanel.module.scss";

export default function ProjectGridPanel({ grids }) {
  return (
    <section className="card project-panel grid-panel">
      <Slider>
        {grids.map((grid) => (
          <InteractiveGrid gridName={grid.name} data={JSON.parse(grid.data)} />
        ))}
      </Slider>
    </section>
  );
}
