const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");
const itemSeed = require("./seed/seed.js");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("./passport-local");
const morgan = require("morgan");
const app = express();
const MongoStore = require("connect-mongo")(session);
const PORT = process.env.PORT || 3001;


mongoose.promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fakazondb");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/public"));

app.use(cookieParser());
app.use(session({ 
  secret: 'keyboard cat',
    store: new MongoStore({ mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false
 }));

app.use(passport.initialize());
app.use(passport.session());

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

app.use(morgan("dev"));

const Routes = require("./routes/index.js")
app.use(Routes);

app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
