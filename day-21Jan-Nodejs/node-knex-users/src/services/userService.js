import db from "../db.js";

export async function getAllUsers() {
    return db("users").select("id", "name", "email");
}

export async function createUser({ name, email }) {
    const [user] = await db("users")
        .insert({ name, email })
        .returning(["id", "name", "email"]); // Postgres supports returning
    return user;
}
