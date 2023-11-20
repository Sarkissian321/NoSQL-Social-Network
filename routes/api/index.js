const router = require("express").Router();
const thoughtRoutes = require("./thought-routes.js");
const userRoutes = require("./user-routes.js");

router.use("/thoughts", thoughtRoutes);

//fetch("/api/users/4329"); // this is an HTTP get operation by default, right?
router.use("/users", userRoutes);


module.exports = router;