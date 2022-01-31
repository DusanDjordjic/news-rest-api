const express = require("express");
const categoryController = require("../controllers/category");
const newsController = require("../controllers/news");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const categories = await categoryController.getAllCategories(next);
  res.json(categories);
});

router.get("/:category/news", async (req, res, next) => {
  const category = req.params.category;
  let pageSize = req.query.pageSize;
  const news = await newsController.getAllNews(next);
  let newsInCategory = news.filter(
    (singleNew) => singleNew.category == category
  );
  let maxLength = newsInCategory.length;
  if (pageSize) {
    newsInCategory = newsInCategory.slice(0, pageSize);
  }
  res.json({ maxLength, news: newsInCategory });
});

module.exports.router = router;
