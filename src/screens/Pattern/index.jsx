import { Link } from "react-router-dom";
import InteractivePattern from "../../components/InteractivePattern/index.jsx";
import Gauge from "../../components/Gauge/index.jsx";
import "./index.module.scss";

const exampleData = [
  [
    { type: "P", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "P", width: 1 },
  ],
  //   [
  //     { type: "P" },
  //     { type: "P" },
  //     { type: "CF", connectedR: true },
  //     { type: "CF", connectedR: true, connectedL: true },
  //     { type: "CF", connectedR: true, connectedL: true },
  //     { type: "CF", connectedL: true },
  //     { type: "CB", connectedR: true },
  //     { type: "CB", connectedR: true, connectedL: true },
  //     { type: "CB", connectedR: true, connectedL: true },
  //     { type: "CB", connectedL: true },
  //     { type: "P" },
  //     { type: "P" },
  //   ],
  [
    { type: "P", width: 1 },
    { type: "P", width: 1 },
    { type: "CF", width: 4 },
    { type: "CB", width: 4 },
    { type: "P", width: 1 },
    { type: "P", width: 1 },
  ],
  [
    { type: "P", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "P", width: 1 },
  ],
  [
    { type: "P", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "P", width: 1 },
  ],
];

const exampleDataTwo = [
  [
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
  ],
  [
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "CB", width: 6 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
  ],
  [
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
  ],
  [
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
  ],
  [
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
  ],
  [
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "CF", width: 6 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
  ],
  [
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
  ],
  [
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "P", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
    { type: "K", width: 1 },
  ],
];

/*
- name
- lead image
- other images
- difficulty
- description
- materials
- sizes (?)
- gauge size
- written instructions
- grids
*/

const data = {
  title: "Cable Knit Candle Cozies",
  description:
    "Keep your candles cozy with these simple but beautiful cable knits!",
  leadImage: "public/candle-cozies.png",
  author: "Yarnspirations",
  images: [],
  difficulty: "INTERMEDIATE",
  materials: [
    {
      type: "yarn",
      name: "Red Heart Super Saver (7oz/197g; 426yds/389m)",
      quantity: "1 skein",
      toMake: "12 small cozies or 8 large cozies",
    },
    {
      type: "needle",
      name: "US 7 (4.5mm) knitting needles",
    },
    {
      type: "needle",
      name: "US 8 (5mm) knitting needles",
    },
  ],
  sizes: ["S", "L"],
  gauge: { stitches: 18, rows: 24, widthInches: 4, heightInches: 4 },
  instructions: [],
  grids: [exampleData, exampleDataTwo],
};

export default function PatternScreen() {
  return (
    <section id="pattern">
      <div className="pattern-header card">
        <h1>{data.title}</h1>
        <div>
          <h3>by {data.author}</h3>
          <h3>Skill Level: {data.difficulty}</h3>
        </div>
      </div>
      <div className="pattern-splashscreen">
        <div className="card">
          <img src={data.leadImage} />
          {data.images.length > 0 && <Link to="">See more Photos!</Link>}
          <p>{data.description}</p>
        </div>
        <div className="card">
          <h3>What you'll need</h3>
          <ul>
            {data.materials.map((mat) => (
              <li>
                {mat.name}
                {mat.quantity && `: ${mat.quantity}`}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>The gauge</h3>
          <Gauge data={data.gauge} />
        </div>
      </div>
      <div className="pattern-instructions">
        <div className="card">
          {data.instructions.map((step) => (
            <p>{step}</p>
          ))}
        </div>
        <div className="card">
          <InteractivePattern data={exampleData} />
          <InteractivePattern data={exampleDataTwo} />
        </div>
      </div>
    </section>
  );
}
