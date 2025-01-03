const PORT = process.env.PORT || 8000;
const app = require("./app");

const init = async () => {
  try {
    // start listening (and create a 'server' object representing our server)
    const server = app.listen(PORT, () =>
      console.log(`Mixing it up on port ${PORT}`),
    );
  } catch (ex) {
    console.log(ex);
  }
};

init();
