const mongoose = require("mongoose");

module.exports = async () => {
  const uri =
  "mongodb+srv://aditya:Ayanagar47@cluster1.uqrzsb1.mongodb.net/main?retryWrites=true&w=majority";
  try {
     mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Mongoose connect");
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};