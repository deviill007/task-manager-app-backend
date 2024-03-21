const dotenv = require("dotenv").config();
const express = require("express")
const connectDB = require("./config/connectDB")
const mongoose = require("mongoose");
const Task = require("./Model/taskmodel");
const app = express();
const taskRoutes = require("./routes/taskRoutes")
const cors = require("cors");

//routes

app.get("/", (req, res) => {
    res.send("Home page");
})
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: ["https://localhost:3000", "https://mern-task-manager-app-api-yfr4.onrender.com"]
}));
app.use("/api/tasks/", taskRoutes);


const PORT = process.env.PORT || 5000

mongoose 
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))


