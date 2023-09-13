const { app } = require("./server");
const connectDB = require("./config/database.js");
const dotenv = require('dotenv').config();

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = { app };