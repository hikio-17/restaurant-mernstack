const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://restaurant-user:hikio010217@restaurant-mernstack.9tfd8jo.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database connection success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
