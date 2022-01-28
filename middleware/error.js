module.exports.errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";
  res.status(err.statusCode);
  res.send(err.message);
};
