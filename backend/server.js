const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let users = [];

app.post("/register", (req, res) => {
    const { username, email } = req.body;

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "Email already registered!" });
    }

    users.push(req.body);

    res.json({ message: "Registration successful!" });
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
