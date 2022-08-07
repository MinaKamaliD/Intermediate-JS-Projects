let todoInput = document.querySelector("input");
let todoContainer = document.querySelector(".container");
let todoUl = document.querySelector("ul");

function addTodo(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    if (todoInput.value) {
      let todoSpan = document.createElement("span");
      todoSpan.innerHTML = todoInput.value;

      let todoIcon = document.createElement("i");
      todoIcon.className = "fa fa-trash-o delete";
      todoIcon.addEventListener("click", function () {
        todoIcon.parentElement.remove();
      });

      let todoLi = document.createElement("li");
      todoLi.className =
        "list-group-item d-flex justify-content-between align-items-center";

      todoLi.append(todoSpan, todoIcon);
      todoUl.append(todoLi);

      console.log(todoUl);
      todoInput.value = "";
    }
  }
}

window.addEventListener("keydown", addTodo);
