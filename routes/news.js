const express = require("express");
const router = express.Router();

// Controllers imports
const newsController = require("../controllers/news");

router.get("/", async (req, res, next) => {
  const allNews = await newsController.getAllNews(next);
  res.status(200).json(allNews);
});

router.get("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  const allNews = await newsController.getAllNews(next);
  const singleNew = allNews.filter((sn) => sn.id === id)[0];

  if (singleNew === undefined) {
    return next({ statusCode: 404, message: `No new with id of ${id}` });
  }

  res.status(200).json(singleNew);
});

module.exports.router = router;
