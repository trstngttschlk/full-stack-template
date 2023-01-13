// todo - declare variables
const express = require("express") // bring in express
const app = express() // easier to reference express
const PORT = 8000 // can be any port
const mongoose = require("mongoose") // bring in mongoose

// import functions / routes
const connectDB = require("./config/database") // require(location of exported variable)
const homeRoutes = require("./routes/home")
require("dotenv").config({path:"./config/.env"}) // imports variables from env file

// todo - connect to database
connectDB() // found in config/database

// todo - set middleware
app.set("view engine", "ejs") // sets view engine to ejs (templating engine)
app.set(express.static("public")) // public folder will have static files like css
app.use(express.urlencoded({extended: true})) // properly parse requests from forms

// todo - set routes
app.use("/", homeRoutes)

// todo - start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))