import express from "express";
import usersRouter from "./routes/users.js";

const app = express();

// middleware to parse JSON request bodies
app.use(express.json());

// simple logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// mount /users
app.use("/users", usersRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
