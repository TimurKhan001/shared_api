const mongoose = require("mongoose");

const connectString = process.env.MONGO_ADDRESS;

exports.connect = () => {
  mongoose
    .connect(connectString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch((err) => {
      console.log("OH NO MONGO CONNECTION ERROR!!!!");
      console.log(err);
    });
};
