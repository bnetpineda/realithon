const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const db = require("./DatabaseSQL-connection");

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); 
app.set('views', './views'); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/realithon", (req, res) => {
  res.send("Welcome to Realithon");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username == "" || password == "") {
    return res.status(400).send("Please fill all fields.");
  }

  if (username.length < 6) {
    return res.status(400).send("Username needs 6 or more characters.");
  }
  if (password.length < 8) {
    return res.status(400).send("Password needs 8 or more characters.");
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword],
      (err, result) => {
        if (err) {
          return res.status(500).send("User registration failed.");
        }
        res.redirect('/');
      }
    );
  } catch (error) {
    res.status(500).send("Error during registration.");
  }
});
