const express = require("express");
const newsRoutes = require("./routes/news");
const categoriesRoutes = require("./routes/categories");
const searchRoutes = require("./routes/search");
const errorController = require("./middleware/error");

const cors = require("cors");
const app = express();

app.use(cors());
app.use("/news", newsRoutes.router);
app.use("/categories", categoriesRoutes.router);
app.use("/search", searchRoutes.router);
app.use(errorController.errorHandler);
// Starnig server
const PORT = process.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started");
  console.log(`Host: http://localhost:${PORT}`);
});
