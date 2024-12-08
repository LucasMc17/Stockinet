"use strict";

const {
  db,
  models: { Pattern },
} = require("..");

const testData = [
  {
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
    // sizes: ["S", "L"],
    // gauge: { stitches: 18, rows: 24, widthInches: 4, heightInches: 4 },
    gaugeStitches: 18,
    gaugeRows: 24,
    gaugeWidthInches: 4,
    gaugeHeightInches: 4,
    instructions: [],
    // grids: [
    //   { name: "Large Cozy", data: exampleData },
    //   { name: "Small Cozy", data: exampleDataTwo },
    //   { name: "Large Cozy", data: exampleData },
    //   { name: "Small Cozy", data: exampleDataTwo },
    //   { name: "Large Cozy", data: exampleData },
    //   { name: "Small Cozy", data: exampleDataTwo },
    // ],
  },
  {
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
    // gauge: { stitches: 18, rows: 24, widthInches: 4, heightInches: 4 },
    gaugeStitches: 18,
    gaugeRows: 24,
    gaugeWidthInches: 4,
    gaugeHeightInches: 4,
    instructions: [],
    // grids: [
    //   { name: "Large Cozy", data: exampleData },
    //   { name: "Small Cozy", data: exampleDataTwo },
    //   { name: "Large Cozy", data: exampleData },
    //   { name: "Small Cozy", data: exampleDataTwo },
    //   { name: "Large Cozy", data: exampleData },
    //   { name: "Small Cozy", data: exampleDataTwo },
    // ],
  },
];

/*
  title,
  description,
  leadImage,
  author,
  images,
  difficulty,
  materials,
  gaugeStitches,
  gaugeRows,
  gaugeWidthInches,
  gaugeHeightInches,
  instructions
*/

async function createPattern(data) {
  const dbPattern = await Pattern.create(data);
}

async function seed() {
  await db.sync({ force: true }); // THIS IS A HARD RESET
  console.log("db synced!");

  await createPattern(testData[0]);
  await createPattern(testData[1]);

  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// ONLY execute if we ran this file directly (node seed.js)
if (module === require.main) {
  runSeed();
}

module.exports = seed;
