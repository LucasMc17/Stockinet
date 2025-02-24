import Slider from "../Slider.jsx";
import { InteractiveGrid } from "../";

export default function ProjectGridPanel({ grids }) {
  return (
    <section>
      <Slider>
        {grids.map((grid) => (
          <InteractiveGrid gridName={grid.name} data={JSON.parse(grid.data)} />
        ))}
      </Slider>
    </section>
  );
}
