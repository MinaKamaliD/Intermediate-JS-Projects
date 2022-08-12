let input = document.querySelector(".form-control");
let addButton = document.querySelector("#addButton");
let clearButton = document.querySelector("#clearButton");
let todoUl = document.getElementById("todoList");

let todosArray = [];

function addNewTodo() {
  let newTodoObject = {
    id: todosArray.length + 1,
    title: input.value,
    complete: false,
  };
  input.value = "";

  todosArray.push(newTodoObject);
  setLocalStorage(todosArray);
  todosGenerator(todosArray);

  input.focus();
}

function setLocalStorage(array) {
  localStorage.setItem("todos", JSON.stringify(array));
}

function todosGenerator(array) {
  todoUl.innerHTML = "";

  array.forEach(function (todoObj) {
    let todoLabel = document.createElement("label");
    let completeBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    let todoLi = document.createElement("li");

    todoLabel.innerHTML = todoObj.title;

    completeBtn.className = "btn btn-success";
    completeBtn.innerHTML = "Complete";
    completeBtn.setAttribute("onclick", "editTodo(" + todoObj.id + ")");

    deleteBtn.className = "btn btn-danger";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "removeTodo(" + todoObj.id + ")");

    todoLi.className = "completed well";

    if (todoObj.complete) {
      todoLi.className = "uncompleted well";
      completeBtn.innerHTML = "UnComplete";
    }

    todoLi.append(todoLabel, completeBtn, deleteBtn);
    todoUl.append(todoLi);
  });
}
function addNewTodoEnter(event) {
  if (event.key === "Enter") {
    addNewTodo();
  }
}

function getLocalStorage() {
  let localstorageTodos = JSON.parse(localStorage.getItem("todos"));
  if (localstorageTodos) {
    todosArray = localstorageTodos;
  } else {
    todosArray = [];
  }
  todosGenerator(todosArray);
}

function clearTodos() {
  todosArray = [];
  todosGenerator(todosArray);
  localStorage.removeItem("todos");
}

function editTodo(todoId) {
  let localStorageTodos = JSON.parse(localStorage.getItem("todos"));

  todosArray = localStorageTodos;

  todosArray.forEach(function (todo) {
    if (todo.id === todoId) {
      todo.complete = !todo.complete;
    }
  });

  setLocalStorage(todosArray);
  todosGenerator(todosArray);
}

function removeTodo(todoId) {
  let localStorageTodos = JSON.parse(localStorage.getItem("todos"));

  todosArray = localStorageTodos;
  let mainTodoIndex = todosArray.findIndex(function (todo) {
    return todo.id === todoId;
  });

  todosArray.splice(mainTodoIndex, 1);

  setLocalStorage(todosArray);
  todosGenerator(todosArray);
}

addButton.addEventListener("click", addNewTodo);
window.addEventListener("keydown", addNewTodoEnter);
window.addEventListener("load", getLocalStorage);
clearButton.addEventListener("click", clearTodos);
