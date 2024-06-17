const input = document.getElementById("input");
const list = document.getElementById("list");

function add() {
    if (input.value.trim() === '') {
        alert("Please enter a task.");
        return;
    }

    const taskText = input.value.trim();

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    list.appendChild(li);
    input.value = "";
    save();
}

function editTask(button) {
    let span = button.previousElementSibling;
    let newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
    save();
}

function deleteTask(button) {
    let li = button.parentNode;
    list.removeChild(li);
    save();
}
function save()
{
    localStorage.setItem("data",list.innerHTML);
}
function show()
{
    list.innerHTML=localStorage.getItem("data");
}
show();