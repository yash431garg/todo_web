require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");

const User = require("./models/user");
const Todo = require("./models/todo");
const todo = require("./models/todo");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!(firstname && lastname && email && password)) {
      res.status(400).send("All fields are required.");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).send("user already exists.");
    }
    const encryptPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      email: email.toLowerCase(),
      password: encryptPassword,
    });
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    user.token = token;
    user.password = undefined;
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = await req.body;
    // const user = User.findOne({ email });
    if (!(email && password)) {
      res.status(400).send("Fields are missing");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      user.token = token;
      user.password = undefined;
      const options = {
        expires: new Date(Date.now + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        user,
      });
      res.status(200).json(user);
    }
    res.status(400).send("Email & password is incorrect");
  } catch (err) {
    console.log(err);
  }
});
app.post("/subscribe", async (req, res) => {
  const amount = req.body.amount;
  var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  const myOrder = await instance.orders.create({
    amount: amount * 100,
    currency: "INR",
    receipt: "receipt#1",
  });
  res.send(200).json({
    success: true,
    amount,
    order: myOrder,
  });
});
app.post("/board", auth, async (req, res) => {
  try {
    const todoItems = await req.body;
    const user = await User.findOne({ email: req.user.email });
    // console.log(user);
    const todos = await Todo.findOne({ userId: user._id }).exec();
    if (!todos) {
      await Todo.create({
        userId: user._id,
        todos: todoItems,
      });
    } else {
      todos.todos = todoItems;
      await todos.save();
    }
    res.json(todoItems);
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
});
app.get("/bards", auth, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    // const todos = await Todo.findOne({ userId: user._id }).exec();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
});
module.exports = app;
