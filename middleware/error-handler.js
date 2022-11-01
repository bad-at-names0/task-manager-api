const { CustomAPIError } = require("../errors/custom-error");

const errorHandleMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  console.log(err);
  res.status(500).json({ msg: `Something went lol wrong` });
};

module.exports = errorHandleMiddleware;
