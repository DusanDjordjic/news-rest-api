const fs = require("fs");
async function getAllNews(next) {
  try {
    const data = fs.readFileSync("db/news.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    next({ statusCode: 500, message: "Error while opening news file" });
  }
}

module.exports.getAllNews = getAllNews;
