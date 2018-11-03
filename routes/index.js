const router = require("express").Router();
const userRoutes = require("./api/user");
const itemRoutes = require("./api/products");

router.use("/api/user", userRoutes);
router.use("/api/products", itemRoutes);

module.exports = router;
