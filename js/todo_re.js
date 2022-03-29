const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];

function checkValidate(checkItem) {
  let valid = true;
  console.log(checkItem.text);
  const ListOfToDo = localStorage.getItem("toDoList");
  const parsedToDos = JSON.parse(ListOfToDo);

  if (toDos !== null) {
    parsedToDos.forEach((item) => {
      console.log(item.text);
      //   if (item.text === checkItem.text) {
      //     valid = false;
      //     alert("중복된 값이 있습니다");
      //   }
    });
  }
  return valid;
}

function paintToDo(item) {
  const toDoListEl = document.createElement("li");
  const toDoSpan = document.createElement("span");
  const toDoBtn = document.createElement("button");
  toDoSpan.innerText = item.text;
  toDoBtn.innerText = "X";
  toDoList.appendChild(toDoListEl);
  toDoListEl.appendChild(toDoBtn);
  toDoListEl.appendChild(toDoSpan);
}

function setToDoList(item) {
  const stringedToDo = JSON.stringify(item);

  if (checkValidate(item)) {
    toDos.push(stringedToDo);
    console.log(toDos);
    localStorage.setItem("toDoList", toDos);
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

toDoForm.addEventListener("submit", handleToDoSubmit);
