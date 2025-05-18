const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

const parkRoutes = require("./routes/park.routes");
app.use("/api/parks", parkRoutes);

db.sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
