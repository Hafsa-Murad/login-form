const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;

mongoose.connect(URL).then(() => {
    console.log("Mongodb is Connected....");
}).catch((error) => {
    console.log("Mongodb connection error...", error);
});