"use strict";

const {
  db,
  models: { Pattern, Grid, GridRow, GridStitch },
} = require("..");

const exampleGrid = {
  name: "Large Cozy",
  data: [
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
  ],
};

const exampleGridTwo = {
  name: "Small COzy",
  data: [
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
  ],
};

const testData = [
  {
    title: "Cable Knit Candle Cozies",
    description:
      "Keep your candles cozy with these simple but beautiful cable knits!",
    leadImage: "/public/candle-cozies.png",
    author: "Yarnspirations",
    images: ["/public/candle-cozies-2.png", "/public/candle-cozies-3.png"],
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
    gaugeStitches: 18,
    gaugeRows: 24,
    gaugeWidthInches: 4,
    gaugeHeightInches: 4,
    instructions: [],
    grids: [exampleGrid, exampleGridTwo],
  },
  {
    title: "Cable Knit Candle Cozies 2",
    description:
      "Keep your candles cozy with these simple but beautiful cable knits!",
    leadImage: "/public/candle-cozies.png",
    author: "Yarnspirations",
    images: ["/public/candle-cozies-2.png", "/public/candle-cozies-3.png"],
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
    gaugeStitches: 18,
    gaugeRows: 24,
    gaugeWidthInches: 4,
    gaugeHeightInches: 4,
    instructions: [],
    grids: [exampleGrid, exampleGridTwo],
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
  // data.grids.forEach(async (obj) => {
  //   const dbGrid = await Grid.create({ name: obj.name });
  //   obj.data.forEach(async (row, i) => {
  //     const dbRow = await GridRow.create({ order: i });
  //     await dbRow.setGrid(dbGrid);
  //     row.forEach(async (stitch, i) => {
  //       const dbStitch = await GridStitch.create({ order: i, ...stitch });
  //       await dbStitch.setGridRow(dbRow);
  //     });
  //   });
  //   await dbGrid.setPattern(dbPattern);
  // });
  for (let i = 0; i < data.grids.length; i++) {
    const obj = data.grids[i];
    const dbGrid = await Grid.create({ name: obj.name });
    for (let y = 0; y < obj.data.length; y++) {
      const row = obj.data[y];
      const dbRow = await GridRow.create({ order: y });
      await dbRow.setGrid(dbGrid);
      for (let x = 0; x < row.length; x++) {
        const stitch = row[x];
        const dbStitch = await GridStitch.create({ order: x, ...stitch });
        await dbStitch.setGridRow(dbRow);
      }
    }
    await dbGrid.setPattern(dbPattern);
  }
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
