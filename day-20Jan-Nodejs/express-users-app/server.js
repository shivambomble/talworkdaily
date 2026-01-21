import express from "express";
import usersRouter from "./routes/users.js";

const app = express();

// Logging middleware (runs for every request)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Built-in body parser for JSON
app.use(express.json());

// Mount users router at /users
app.use("/users", usersRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
