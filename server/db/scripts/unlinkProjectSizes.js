const {
  db,
  models: { Project },
} = require("..");

const { Op } = require("sequelize");

async function unlink() {
  const projects = await Project.findAll({
    where: { sizeId: { [Op.ne]: null } },
  });

  for (let project of projects) {
    await project.update({ sizeId: null });
  }
}

async function runUnlink() {
  console.log("unlinking...");
  try {
    await unlink();
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
  runUnlink();
}

module.exports = unlink;
