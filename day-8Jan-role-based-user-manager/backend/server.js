import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

/* ---------- Setup __dirname (ES Module fix) ---------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ---------- Initialize app FIRST ---------- */
const app = express();

/* ---------- Middleware ---------- */
app.use(cors());
app.use(express.json());

/* ---------- Serve frontend ---------- */
app.use(express.static(path.join(__dirname, "../frontend")));

/* ---------- API Route ---------- */
app.get("/api/users", (req, res) => {
    res.json([
        { name: "Shivam", role: "admin" },
        { name: "Amit", role: "user" },
        { name: "Guest", role: "guest" }
    ]);
});

/* ---------- Start server ---------- */
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
