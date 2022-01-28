const express = require("express");
const router = express.Router();
const {
  queryParamsMiddleware,
} = require("../middleware/query-params-middleware");
// Controllers imports
const newsController = require("../controllers/news");

router.get("/", queryParamsMiddleware, async (req, res, next) => {
  const { country, page, pageSize, category, skip } = req.myParams;
  let allNews = await newsController.getAllNews(next);

  // Filter by country if exists
  if (country) {
    allNews = allNews.filter((singleNew) => singleNew.country === country);
  }

  // Filter by category if exists
  if (category) {
    allNews = allNews.filter((singleNew) => singleNew.category === category);
  }

  // Stating index to take from
  // If pageSize is not defined it will be 0
  // Subtract 1 so page starts from 0
  let startingIndex = (page - 1) * pageSize || 0;

  // If skip exists than skip first "x" items
  if (skip) startingIndex += skip;

  // Ending index that is by pageSize bigger than startingIndex
  // If not defined let it be the end of allNews array
  let endingIndex = page * pageSize || allNews.length;

  // If skip exists than add skip to endingIndex so we extend it to
  // cover for skipping at beginning
  if (skip) endingIndex += skip;

  // Take sub-array from existing array
  allNews = allNews.slice(startingIndex, endingIndex);

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
