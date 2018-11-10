const router = require("express").Router();
const itemRoutes = require("./products.js");
const userRoutes = require("./user.js");
const authRouts = require("./auth.js");
const cartRoutes = require("./cart.js")

router.use("/products", itemRoutes);
router.use("/user", userRoutes);
router.use("/cart", cartRoutes);
router.use(authRouts);

module.exports = router;
