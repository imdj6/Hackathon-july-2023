const mongoose = require("mongoose");
const mongoURI =
  "";

const connectToMongo = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("connected");
  });
};

module.exports = connectToMongo;
