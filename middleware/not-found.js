const notFound = (req, res) => {
  res.status(404).send("This route is not found");
};

module.exports = notFound;

