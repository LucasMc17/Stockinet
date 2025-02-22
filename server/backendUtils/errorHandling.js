function throw404(item) {
  if (!item) {
    const err = new Error("Item Not found");
    err.status = 404;
    throw err;
  }
}

module.exports = { throw404 };
