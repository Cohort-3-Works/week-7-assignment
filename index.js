const express = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { UserModel, TodoModel } = require("./db/db");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userModel.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    message: "User created successfully",
  });
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const response = await userModel.findOne({
    email,
    password,
  });
  if (!response) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }

  const token = jwt.sign(
    { id: response._id.toString() },
    process.env.JWT_SECRET
  );

  return res.status(200).json({
    message: "User signed in successfully",
    token,
  });
});

app.post("/todos", async (req, res) => {});

app.get("todo", async (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
