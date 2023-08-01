function addTask()
{
    const taskInput = document.getElementById("taskInput").value
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.className = "list-group-item"
    const button = document.createElement("button");
    li.innerHTML = 
    `
        <span class="align-middle">${taskInput}</span>
        <button onclick="deleteTask(this)" class="btn btn-danger float-right">Delete</button>
    `
;
    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
}

function deleteTask(element)
{
    const taskList = document.getElementById("taskList");
    const li = element.parentElement;

    taskList.removeChild(li);
}