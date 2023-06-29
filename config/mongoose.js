//require  libarary
const mongoose = require("mongoose");
require("dotenv").config();

// DB connection
// mongoose
//   .connect()
//   .then(() => console.log("db connected"))
//   .catch((error) => console.log("error in connecting db", error));
// accuire the connection to check its succesfull
module.exports = mongoose.connect(process.env.MONGO_DB)
                                .then(() => console.log("CONNECTION ESTABLISHED"));