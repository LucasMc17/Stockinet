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

app.use("/public", express.static(path.join(__dirname, "..", "public")));

app.use("/api", require("./api"));

// any remaining requests just return the html, let reacthandle 404 messages
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
