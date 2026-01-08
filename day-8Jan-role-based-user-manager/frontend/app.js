import { User } from "./models/User.js";
import { fetchUsers } from "./api.js";

const list = document.getElementById("userList");

async function loadUsers() {
    try {
        const data = await fetchUsers();

        for (const u of data) {
            const user = new User(u.name, u.role);

            const li = document.createElement("li");
            li.innerText = `${user.name} -> ${user.getAccess()}`;
            list.appendChild(li);

            for (const key in user) {
                console.log(key, user[key]);
            }
        }
    } catch (error) {
        console.log("FAILED TO LOAD USERS", error);
    }
}

loadUsers();