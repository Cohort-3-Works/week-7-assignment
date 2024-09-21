const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {});

app.post("/signin", async (req, res) => {});

app.post("/todos", async (req, res) => {});

app.get("todo", async (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
