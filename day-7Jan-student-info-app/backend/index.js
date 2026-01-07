const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

let students = [];

app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    const student = req.body;
    students.push(student);
    console.log(students); //terminal
    res.json({ message: "Student added successfully" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
