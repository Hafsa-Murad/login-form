const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/authRouter");
require("dotenv").config();
require("./models/db");

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hello There!");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/product", productRouter);


app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
})

