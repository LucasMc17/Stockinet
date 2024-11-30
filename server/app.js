const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");
module.exports = app;

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

app.use(cors({ origin: "*" }));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html")),
);

app.use("/public", express.static(path.join(__dirname, "..", "public")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
