const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const userRoutes = require("./routes/userRoutes");

const User = require('./models/userModel');

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.enable("trust proxy")
app.use(
    cors({
        origin: true,
        credentials: true,
        exposedHeaders: ["jwt", "set-cookie", "Set-Cookie"],
    })
);


app.get("/", (req, res) => {
    res.json({ message: "v7" });
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.use("/api/users", userRoutes);

module.exports = { app };
