import express from "express";
import { getAllUsers, createUser } from "../services/userService.js";

const router = express.Router();

// GET /users
router.get("/", async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

// POST /users
router.post("/", async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: "name and email are required" });
        }

        const user = await createUser({ name, email });
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create user" });
    }
});

export default router;
