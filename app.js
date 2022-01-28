const express = require("express");
const newsRoutes = require("./routes/news");
const errorController = require("./controllers/error");
const app = express();

app.use("/news", newsRoutes.router);
app.use(errorController.errorHandler);
// Starnig server
const PORT = process.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started");
  console.log(`Host: http://localhost:${PORT}`);
});
