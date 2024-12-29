"use strict";

require("dotenv").config();
const { client } = require("../../backendUtils/stytchClient");

const {
  db,
  models: { Pattern, Grid, GridRow, GridStitch, User },
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

async function createUser({ email, username, password }) {
  const { user } = await client.passwords.create({
    email,
    password,
    name: { first_name: username },
  });
  const dbUser = await User.create({ username, stytchId: user.user_id });
  return dbUser;
}

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

async function createPattern(data) {
  const dbPattern = await Pattern.create(data);
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
  return dbPattern;
}

async function seed() {
  await db.sync({ force: true }); // THIS IS A HARD RESET
  console.log("db synced!");

  const { results } = await client.users.search({
    // limit: 2,
    // query: {
    //   operator: "OR",
    //   operands: [
    //     {
    //       filter_name: "email_address",
    //       filter_value: ["test@stockinette.co"],
    //     },
    //     {
    //       filter_name: "email_address",
    //       filter_value: ["test2@stockinette.co"],
    //     },
    //   ],
    // },
  });

  for (let i = 0; i < results.length; i++) {
    const { user_id } = results[i];
    await client.users.delete({ user_id });
    console.log("Stytch user deleted");
  }

  const testUser1 = await createUser({
    email: "test@stockinette.co",
    username: "Test",
    password: "uirefhnnj34u45h4unfjs",
  });

  const testUser2 = await createUser({
    email: "test2@stockinette.co",
    username: "Test 2",
    password: "u4t39o3i9rfjeiewifj932",
  });

  const testPattern1 = await createPattern(testData[0]);
  const testPattern2 = await createPattern(testData[1]);

  await testPattern1.setAuthor(testUser1);
  await testPattern2.setAuthor(testUser1);

  await testPattern1.addUser(testUser2);
  await testPattern2.addUser(testUser2);
  await testPattern1.addUser(testUser1);
  await testPattern2.addUser(testUser1);

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
