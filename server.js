const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const userRoutes = require("./routes/userRoutes");
const classroomRoutes = require("./routes/classroomRoutes");
const testRoutes = require("./routes/testRoutes");
const questionRoutes = require("./routes/questionRoutes");

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
    })
);


app.get("/", (req, res) => {
    res.json({ message: "v5" });
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.use("/api/users", userRoutes);
app.use("/api/classrooms", classroomRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/questions", questionRoutes);

module.exports = { app };
