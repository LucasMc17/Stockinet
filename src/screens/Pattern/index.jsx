import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InteractivePattern from "../../components/InteractivePattern/index.jsx";
import Gauge from "../../components/Gauge/index.jsx";
import "./index.module.scss";
import Slider from "../../components/Slider/index.jsx";
import { loadPatterns } from "../../@redux/reducers/Patterns/PatternSlice.js";

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

const data = [
  {
    id: 2,
    title: "Cable Knit Candle Cozies",
    description:
      "Keep your candles cozy with these simple but beautiful cable knits!",
    leadImage: "public/candle-cozies.png",
    author: "Yarnspirations",
    images: ["public/candle-cozies-2.png", "public/candle-cozies-3.png"],
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
    grids: [
      { name: "Large Cozy", data: exampleData },
      { name: "Small Cozy", data: exampleDataTwo },
      { name: "Large Cozy", data: exampleData },
      { name: "Small Cozy", data: exampleDataTwo },
      { name: "Large Cozy", data: exampleData },
      { name: "Small Cozy", data: exampleDataTwo },
    ],
  },
  {
    id: 1,
    title: "Cable Knit Candle Cozies 2",
    description:
      "Keep your candles cozy with these simple but beautiful cable knits!",
    leadImage: "public/candle-cozies.png",
    author: "Yarnspirations",
    images: ["public/candle-cozies-2.png", "public/candle-cozies-3.png"],
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
    grids: [
      { name: "Large Cozy", data: exampleData },
      { name: "Small Cozy", data: exampleDataTwo },
      { name: "Large Cozy", data: exampleData },
      { name: "Small Cozy", data: exampleDataTwo },
      { name: "Large Cozy", data: exampleData },
      { name: "Small Cozy", data: exampleDataTwo },
    ],
  },
];

export default function PatternScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPatterns(data));
  });

  const pattern = useSelector((s) => s.patterns.currentPattern);

  if (pattern) {
    const images = [pattern.leadImage, ...pattern.images];

    return (
      <section id="pattern">
        <div className="pattern-header card">
          <h1>{pattern.title}</h1>
          <div>
            <h3>by {pattern.author}</h3>
            <h3>Skill Level: {data.difficulty}</h3>
          </div>
        </div>
        <div className="pattern-splashscreen">
          <div className="card">
            <Slider>
              {images.map((image) => (
                <img src={image} />
              ))}
            </Slider>
            {images.length > 0 && <Link to="">Enlarge</Link>}
            <p>{pattern.description}</p>
          </div>
          <div className="card">
            <h3>What you'll need</h3>
            <ul>
              {pattern.materials.map((mat) => (
                <li>
                  {mat.name}
                  {mat.quantity && `: ${mat.quantity}`}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>The gauge</h3>
            <Gauge data={pattern.gauge} />
          </div>
        </div>
        <div className="pattern-instructions">
          <div className="card">
            {pattern.instructions.map((step) => (
              <p>{step}</p>
            ))}
          </div>
          <div className="card">
            <Slider>
              {pattern.grids.map((grid) => (
                <InteractivePattern data={grid.data} gridName={grid.name} />
              ))}
            </Slider>
            {/* <InteractivePattern data={exampleData} />
            <InteractivePattern data={exampleDataTwo} /> */}
          </div>
        </div>
      </section>
    );
  }

  return <></>;
}
