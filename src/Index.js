document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const taskDescription = document.querySelector("#new-task-description").value;
    addTaskToList(taskDescription);
    form.reset(); 
  });
});
function addTaskToList(task) {
  const taskList = document.querySelector("#tasks");
  const newTask = document.createElement("li");
  newTask.innerText = task;
  taskList.appendChild(newTask);
}
function addTaskToList(task) {
  const taskList = document.querySelector("#tasks");

  const newTask = document.createElement("li");
  newTask.innerText = task;

 

  newTask.appendChild(deleteButton);

  taskList.appendChild(newTask);
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

const taskDescription = document.querySelector("#new-task-description").value;
const taskPriority = document.querySelector("#task-priority").value;

addTaskToList(taskDescription, taskPriority);

form.reset();
  });
});

function addTaskToList(task, priority) {
  const taskList = document.querySelector("#tasks");

  const newTask = document.createElement("li");
  newTask.innerText = task;

  if (priority === "high") {
    newTask.style.color = "Black";
  } else if (priority === "medium") {
    newTask.style.color = "Green";
  } else if (priority === "low") {
    newTask.style.color = "Blue";
  }

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function() {
    newTask.remove();
  });

  newTask.appendChild(deleteButton);

  taskList.appendChild(newTask);
}
