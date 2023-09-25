const express = require("express");
const router = express.Router();
const controllers = require("../controllers/usercontroller");
const fetch = require("../controllers/getinfo");
const newTask = require("../controllers/newtask");

//Routes
router.post("/user/login", controllers.userlogin);
router.post("/user/register", controllers.userregister);
router.get("/admin/getinfo", fetch.admin);
router.get("/user/getinfo", fetch.user);
router.delete("/admin/delete/:id", fetch.adminDelete);
router.post("/task/new", newTask.Task);
router.get("/task/all", fetch.getTask);
router.delete("/task/delete/:id" , newTask.taskDelete);
router.put("/task/update/:id" , newTask.taskUpdate);
 

module.exports = router;