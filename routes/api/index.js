const router = require("express").Router();
const itemRoutes = require("./products");
const userRoutes = require("./user");

router.use("/products", itemRoutes);
router.use("/user", userRoutes);

module.exports = router;
