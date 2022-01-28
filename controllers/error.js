module.exports.errorHandler = (err, req, res, next) => {
  console.log(err);

  res.status(err.statusCode);
  res.send(err.message);
};
