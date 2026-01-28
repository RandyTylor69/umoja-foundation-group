import dotenv from "dotenv";
import express from "express";
import mysql from "mysql2";

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
  port: 4000,
  ssl: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: true, // Set to true for maximum security
  },
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
        return res.status(500).send({ err: err });
      }
      if (result.length > 0) {
        console.log("username:", username, "password:", password);
        return res.send({ result, message: username + " " + password }); // if user exists, send the user
      } else {
        return res
          .status(401)
          .send({ result, message: "Password / username incorrect" }); // if user exists but pw is wrong
      }
    },
  );
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Could not log out" });
    }
    res.clearCookie("connect.sid"); // "connect.sid" is the default session cookie name
    res.json({ message: "Logged out successfully" });
  });
});

app.post("/reviews", (req, res) => {
  const { name, year, location, content } = req.body;
  db.query(
    "INSERT INTO reviews (name, year, location, content) VALUES(?,?,?,?)",
    [name, year, location, content],
  );
  res.status(201).json({ message: "Review uploaded successfully." });
});

app.get("/reviews", (req, res) => {
  db.query("SELECT * FROM reviews", (err, result) => {
    if (err) {
      return res.status(500).send({ err: err });
    }
    if (result.length > 0) {
      return res.send({ result });
    }
  });
});
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
