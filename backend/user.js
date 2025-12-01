const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// อ่านฐานข้อมูล users.json
function readUsers() {
    const file = fs.readFileSync("users.json");
    return JSON.parse(file);
}

// เขียนลง users.json
function saveUsers(data) {
    fs.writeFileSync("users.json", JSON.stringify(data, null, 2));
}

// ----------------------- REGISTER -----------------------
app.post("/register", (req, res) => {
    const { name, phone, email, password, address } = req.body;

    const users = readUsers();

    // ตรวจสอบ Email ซ้ำ
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "Email already exists!" });
    }

    const newUser = {
        id: Date.now(),
        name,
        phone,
        email,
        password,
        address
    };

    users.push(newUser);
    saveUsers(users);

    res.json({ message: "Register successful!" });
});

// ----------------------- LOGIN -----------------------
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({
        message: "Login successful!",
        user
    });
});

// -----------------------
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
