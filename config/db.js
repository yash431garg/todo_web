const mongoose = require("mongoose");
require("dotenv").config();

const dbString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.zf8xq.mongodb.net/ToDoList?retryWrites=true&w=majority`;

const connectDb = async () => {
  try {
    await mongoose.connect(dbString, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });

    console.log("Database connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
