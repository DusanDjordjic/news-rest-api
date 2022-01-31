const express = require("express");

const newsController = require("../controllers/news");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const news = await newsController.getAllNews(next);
  res.json(news);
});
router.get("/:q", async (req, res, next) => {
  const q = req.params.q;

  const news = await newsController.getAllNews(next);

  const filtered = news.filter(
    (singleNew) =>
      singleNew.title.includes(q) ||
      singleNew.description.includes(q) ||
      singleNew.content.includes(q) ||
      singleNew.category.includes(q)
  );
  res.json(filtered);
});

module.exports.router = router;
