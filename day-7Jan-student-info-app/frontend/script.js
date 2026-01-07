const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;

    await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, course })
    });

    loadStudents();
});

async function loadStudents() {
    const res = await fetch("http://localhost:3000/students");
    const students = await res.json();

    list.innerHTML = "";

    students.forEach(s => {
        const li = document.createElement("li");
        li.innerText = `${s.name} - ${s.course}`;
        list.appendChild(li);
    });
}

loadStudents();
