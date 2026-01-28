import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  db.query("INSERT INTO users (username, password) VALUES (?,?)", [
    username,
    password,
  ]);
  res.status(201).json({ message: "User registered successfully." });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result); // if user exists, send the user
      } else {
        res.send({ message: "Password / username incorrect" }); // if user exists but pw is wrong
      }
    },
  );
  res.status(201).json({ message: "User logged in successfully." });
});

app.listen(3001, () => {
  console.log("Server is running");
});
