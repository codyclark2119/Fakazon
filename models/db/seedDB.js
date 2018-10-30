const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Items collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/fakazondb"
);

const itemSeed = [
  {
    product: "LEGO City Advent Calendar",
    seller: "LEGO",
    price: "29.99",
    description: "Build 24 different presents, including vehicles, minifigures and seasonal items with this fun advent calendar with toys",
    categories: ["Toys"],
    isInCart: false,
    date: new Date(Date.now())
  },
  {
    product: "Fire TV Stick with Alexa Voice Remote",
    seller: "Amazon",
    price: "39.99",
    description: "Enjoy tens of thousands of channels, apps, and Alexa skills with access to over 500,000 movies and TV episodes.",
    categories: ["Electronics"],
    isInCart: false,
    date: new Date(Date.now())
  },
  {
    product: "Fujifilm INSTAX Mini Instant Film Twin Pack",
    seller: "FujiFilm",
    price: "20.75",
    description: "Designed for use with Instax Mini line of cameras. Works well in low light",
    categories: ["Photo"],
    isInCart: false,
    date: new Date(Date.now())
  },
  {
    product: "Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision",
    seller: "Wyze Labs",
    price: "27.98",
    description: "1080p full HD live stream direct to your smartphone day or night with night vision (up to 30 feet away).",
    categories: ["Photo", "Electronics"],
    isInCart: false,
    date: new Date(Date.now())
  },
  {
    product: "Red Dead Redemption 2",
    seller: "Rockstar Games",
    price: "59.99",
    description: "Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland.",
    categories: ["Video Games", "Electronics"],
    isInCart: false,
    date: new Date(Date.now())
  },
  
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
