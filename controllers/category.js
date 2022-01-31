const fs = require("fs");

async function getAllCategories(next) {
  try {
    const data = fs.readFileSync("db/news.json", "utf-8");
    const parsedData = JSON.parse(data);
    const categories = parsedData.reduce((prev, curr) => {
      if (!prev.includes(curr.category)) {
        prev.push(curr.category);
      }
      return prev;
    }, []);
    console.log(categories);
    return categories;
  } catch (error) {
    next({ statusCode: 500, message: "Error while opening news file" });
  }
}
module.exports.getAllCategories = getAllCategories;
