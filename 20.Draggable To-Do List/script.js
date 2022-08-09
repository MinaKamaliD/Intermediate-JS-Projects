let modal = document.querySelector(".modal");
let addBtn = document.querySelector("#add_btn");
let closeModal = document.querySelector(".close-modal");
let todoInput = document.getElementById("todo_input");
let todoSubmit = document.getElementById("todo_submit");
let todoBox = document.querySelector(".status");

function modalAppears() {
  modal.style.top = "50%";
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
    todoDiv.addEventListener("dragstart", dragHandler);

    todoDiv.append(closeSpan);
    todoBox.append(todoDiv);
    todoInput.value = "";
    modal.style.top = "-50%";
  }
}

function todoSubmittedEnter(event) {
  if (event.key === "Enter") {
    todoIsSubmitted();
  }
}

function dragHandler(event) {
  event.dataTransfer.setData("elementId", event.target.id);
}

function dropHandler(event) {
  let data = event.dataTransfer.getData("elementId");
  event.target.append(document.getElementById(data));
}
function dragOverandler(event) {
  event.preventDefault();
}

addBtn.addEventListener("click", modalAppears);
closeModal.addEventListener("click", modalDisappears);
todoSubmit.addEventListener("click", todoIsSubmitted);
window.addEventListener("keydown", todoSubmittedEnter);
