const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");
const itemSeed = require("./seed/seed.js");

const app = express();

const PORT = process.env.PORT || 3001;

// Defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/public"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fakazondb");

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log("Data Seeded " + data.result.n + " Records");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const Routes = require("./routes/index.js")
app.use(Routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
