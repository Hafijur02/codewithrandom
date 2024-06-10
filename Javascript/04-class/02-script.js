const inputTask = document.getElementById("input-task");
const addTaskBtn = document.getElementById("addTaskBtn");
const deleteTaskBtn = document.getElementById("deleteTaskBtn");
const taskListEl = document.getElementById("taskItems");

let taskList = [];

function renderList() {
  // Clear the current list
  taskListEl.innerHTML = "";

  // Create and append the new list items
  for (let i = 0; i < taskList.length; i++) {
    let newTask = document.createElement('li');
    newTask.innerText = taskList[i];
    taskListEl.appendChild(newTask);
  }
}

function addTask() {
  taskList.push(inputTask.value);
  renderList();
}

function deleteTask() {
  taskList.pop();
  renderList();
}

addTaskBtn.addEventListener("click", addTask);
deleteTaskBtn.addEventListener("click", deleteTask);
