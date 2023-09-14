const express = require("express");
const router = express.Router();
const controllers = require("../controllers/usercontroller");
const fetchrole = require("../controllers/getinfo");

//Routes
router.post("/user/login", controllers.userlogin);
router.post("/user/register", controllers.userregister);
router.get("/admin/getinfo", fetchrole.admin);

module.exports = router;