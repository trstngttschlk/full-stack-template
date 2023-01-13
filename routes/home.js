// handle GET request and POST method to add new items
const express = require("express")
const router = express.Router()
const homeController = require("../controllers/home")

router.get("/", homeController.getIndex) // read
router.post("/new", homeController.createItem) // create
// created /new in views/index.ejs

module.exports = router // export allows router to be used elsewhere