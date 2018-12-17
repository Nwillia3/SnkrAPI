const express = require("express");
const brands = require("./routes/brands");
const categories = require("./routes/categories");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb://localhost/Snkrs",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Cannot connect to MongoDb", err));

app.use(express.json());
app.use("/api/brands", brands);
app.use("/api/categories", categories);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
