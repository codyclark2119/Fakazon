const router = require("express").Router();
const userRoutes = require("./api/user");
const itemRoutes = require("./api/products");
const authRoutes = require("./api/auth");

router.use(userRoutes);
router.use(itemRoutes);
router.use(authRoutes);

module.exports = router;
