export async function fetchUsers() {
    const res = await fetch("http://localhost:3000/api/users");
    return await res.json();
}
