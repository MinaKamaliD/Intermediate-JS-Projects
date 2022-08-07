let modal = document.querySelector(".modal");
let addBtn = document.querySelector("#add_btn");
let closeModal = document.querySelector(".close-modal");
let todoInput = document.getElementById("todo_input");
let todoSubmit = document.getElementById("todo_submit");
let todoBox = document.querySelector(".status");

function modalAppears() {
  modal.style.top = "50%";
  //   console.log("first");
}

function modalDisappears() {
  modal.style.top = "-50%";
}

function todoIsSubmitted() {
  if (todoInput.value) {
    let closeSpan = document.createElement("span");
    closeSpan.className = "close";
    closeSpan.innerHTML = "&times;";
    closeSpan.addEventListener("click", function () {
      closeSpan.parentElement.remove();
    });

    let todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    todoDiv.id = "todoElem";
    todoDiv.draggable = true;
    todoDiv.innerHTML = todoInput.value;

    todoDiv.append(closeSpan);
    todoBox.append(todoDiv);
    todoInput.value = "";
  }
}

function todoSubmittedEnter(event) {
  if (event.key === "Enter") {
    todoIsSubmitted();
  }
}

addBtn.addEventListener("click", modalAppears);
closeModal.addEventListener("click", modalDisappears);
todoSubmit.addEventListener("click", todoIsSubmitted);
window.addEventListener("keydown", todoSubmittedEnter);
