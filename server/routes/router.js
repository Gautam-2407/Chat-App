const express = require("express");
const router = express.Router();
const controllers = require("../controllers/usercontroller");
const fetchrole = require("../controllers/getinfo");
const newTask = require("../controllers/newtask");

//Routes
router.post("/user/login", controllers.userlogin);
router.post("/user/register", controllers.userregister);
router.get("/admin/getinfo", fetchrole.admin);
router.get("/user/getinfo", fetchrole.user);
router.delete("/admin/delete/:id", fetchrole.adminDelete);
router.post("/task/new", newTask.Task);
 

module.exports = router;