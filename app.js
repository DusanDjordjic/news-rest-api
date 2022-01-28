const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Starnig server
const PORT = process.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started");
  console.log(`Host: http://localhost:${PORT}`);
});
