import express from "express";

const router = express.Router();

// In-memory "database"
const users = [
  { id: 1, name: "Shivam" },
  { id: 2, name: "Amit" }
];

// GET /users  → list users
router.get("/", (req, res) => {
  res.json(users);
});

// POST /users  → add a user
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

export default router;
