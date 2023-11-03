let inputText = document.querySelector(".inputText");
let addBtn = document.querySelector(".addBtn");
let listItem = document.querySelector(".listItem");
let storeTodo = [];
let dataIndex;

addBtn.addEventListener("click", function () {
  if (inputText.value != "" && addBtn.innerHTML != "Update") {
    storeTodo.push(inputText.value);
    inputText.value = "";
    showTodo();
  }
  if (inputText.value != "" && addBtn.innerHTML == "Update") {
    storeTodo[dataIndex] = inputText.value;
    inputText.value = "";
    addBtn.innerHTML = "Add";
    showTodo();
  }
});

function showTodo() {
  listItem.innerHTML = "";
  storeTodo.map((el) => {
    listItem.innerHTML += `<li class="list-group-item">
        ${el}
        <button type="button" class="btn btn-primary btn-sm ms-3 editBtn">
          Edit
        </button>
        <button type="button" class="btn btn-danger btn-sm deleteBtn">
          Delete
        </button>
      </li>`;
  });

  let editBtn = document.querySelectorAll(".editBtn");
  let editBtnArr = Array.from(editBtn);

  let deleteBtn = document.querySelectorAll(".deleteBtn");
  let deleteBtnArr = Array.from(deleteBtn);

  editBtnArr.map((el, index) => {
    el.addEventListener("click", function () {
      inputText.value = storeTodo[index];
      addBtn.innerHTML = "Update";
      dataIndex = index;
    });
  });

  deleteBtnArr.map((el, index) => {
    el.addEventListener("click", function () {
      storeTodo.splice(index, 1);
      showTodo();
    });
  });
}
