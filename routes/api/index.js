const router = require("express").Router();
const itemRoutes = require("./products.js");
const userRoutes = require("./user.js");
const authRouts = require("./auth.js");

router.use("/products", itemRoutes);
router.use("/user", userRoutes);
router.use(authRouts);

module.exports = router;
