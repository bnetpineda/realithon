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

app.get("/realithon", (req, res) => {
  res.send("Welcome to Realithon");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (username == "" || email == "" || password == "") {
    return res.status(400).send("Please fill all fields.");
  }

  if (username.length < 6) {
    return res.status(400).send("Username needs 6 or more characters.");
  }
  if (password.length < 8) {
    return res.status(400).send("Password needs 8 or more characters.");
  }
  if (!emailRegex.test(email)) {
    return res.status(400).send("Invalid email format.");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
      (err, result) => {
        if (err) {
          return res.status(500).send("User registration failed.");
        }
        res.redirect("localhost:3000/realithon");
      }
    );
  } catch (error) {
    res.status(500).send("Error during registration.");
  }
});
