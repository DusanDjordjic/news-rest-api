const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All news");
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  if (id == 0) {
    return next({ statusCode: 404, message: `No new with id of ${id}` });
  }
  res.send(`One new by id ${id}`);
});

module.exports.router = router;
