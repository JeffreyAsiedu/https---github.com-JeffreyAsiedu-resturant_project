const express = require("express");
require("dotenv").config;
const expressEjsLayouts = require("express-ejs-layouts");
const frontendRoutes = require("./routes/frontendroute");

const app = express();
const PORT = process.env.PORT || 5463;

// SETTING VIEW ENGINE
app.set("view engine", "ejs");
app.set("layout", __dirname + "/views/layout");
app.set("views", __dirname + "/views/pages");

app.use(express.static(__dirname + "/public"));
app.use(expressEjsLayouts);
app.use(frontendRoutes);

const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  console.log("Connection has been established successfully.");
};

startServer();
