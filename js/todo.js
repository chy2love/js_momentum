const toDoForm = document.querySelector("#todo-form");
const toDoListEl = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

document.addEventListener("DOMContentLoaded", function () {
  getToDoList();
});

let toDoList = [];

function checkValidate(item) {
  let valid = true;
  if (toDoList.length > 0) {
    for (let i = 0; i < toDoList.length; i++) {
      if (toDoList[i] === item) {
        valid = false;
        alert("중복된 값이 있습니다.");
      }
    }
  }
  return valid;
}

function getToDoList() {
  const toDoData = localStorage.getItem("toDoList");
  const toDoDataList = toDoData.split(",");
  toDoList = toDoDataList;

  if (toDoList.length > 0) {
    for (let i = 0; i < toDoList.length; i++) {
      drawToDoList(toDoList[i]);
    }
  }
}

function setToDoList(todo) {
  if (checkValidate(todo)) {
    toDoList.push(todo);
    toDoInput.value = "";

    localStorage.setItem("toDoList", toDoList);
    drawToDoList(todo);
  }
}

function drawToDoList(item) {
  const toDoItemEl = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  span.innerText = item;
  toDoListEl.appendChild(toDoItemEl);
  toDoItemEl.appendChild(button);
  toDoItemEl.appendChild(span);
  button.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
  const clickedToDoEl = event.target.parentElement;
  console.dir(clickedToDoEl);
  const deleteSpan = clickedToDoEl.lastChild.innerText;
  console.log(deleteSpan);
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i] === deleteSpan) {
      toDoList.splice(i, 1);
      i--;
      clickedToDoEl.remove();
      localStorage.setItem("toDoList", toDoList);
    }
  }
  const deletedToDoList = localStorage.getItem("toDoList");
  if (deletedToDoList.length === 0) {
    localStorage.removeItem("toDoList");
  }
}

// localStorage.setItem("todo", []);
// const toDoStorage = localStorage.getItem("todo");
// function paintToDo(newToDo) {
//   const makeList = document.createElement("li");
//   makeList.innerText = newToDo;
//   toDoListEl.appendChild(makeList);
// }

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  //   toDoStorage.push(newToDo);
  //   toDoInput.value = "";
  //   paintToDo(newToDo);
  setToDoList(newToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);