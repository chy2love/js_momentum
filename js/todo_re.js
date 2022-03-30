const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = JSON.parse(localStorage.getItem("toDoList")) ?? [];

function checkValidate(checkItem) {
  let valid = true;

  if (toDos !== null) {
    toDos.forEach((item) => {
      if (item.text === checkItem.text) {
        valid = false;
        alert("중복된 값이 있습니다");
      }
    });
  }
  return valid;
}

function paintToDo(item) {
  const toDoListEl = document.createElement("li");
  const toDoSpan = document.createElement("span");
  const toDoBtn = document.createElement("button");
  toDoListEl.id = item.id;
  toDoSpan.innerText = item.text;
  toDoBtn.innerText = "X";
  toDoList.appendChild(toDoListEl);
  toDoListEl.appendChild(toDoBtn);
  toDoListEl.appendChild(toDoSpan);
  toDoBtn.addEventListener("click", deleteToDo);
}
function deleteToDo(event) {
  const clickedToDoEl = event.target.parentElement;
  const deleteSpan = clickedToDoEl.lastChild.innerText;

  console.log(Number(clickedToDoEl.id));
  toDos.forEach((item) => {
    console.log(item.id);
    if (item.id === Number(clickedToDoEl.id)) {
      let filtered = toDos.filter(
        (item) => item.id !== Number(clickedToDoEl.id)
      );
    }
  });
  localStorage.setItem("toDoList", JSON.stringify(filtered));
  clickedToDoEl.remove();
  if (toDos.length === 0) {
    localStorage.removeItem("toDoList");
  }
}

function setToDoList(item) {
  // const stringedToDo = JSON.stringify(item);
  // console.log(stringedToDo);

  if (checkValidate(item)) {
    toDos.push(item);
    // console.log(toDos);
    const params = JSON.stringify(toDos);
    localStorage.setItem("toDoList", params);
    paintToDo(item);
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = {
    text: toDoInput.value,
    id: Date.now(),
  };
  toDoInput.value = "";
  setToDoList(newToDo);
}
function getToDoList() {
  if (toDos !== null) {
    toDos.forEach(paintToDo);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  getToDoList();
});

toDoForm.addEventListener("submit", handleToDoSubmit);
