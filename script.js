
let localList = JSON.parse(localStorage.getItem("list"))? JSON.parse(localStorage.getItem('items')) : [];

function newElement() {
  let task = document.getElementById("task");
  if (task.value == "" ||
     task.value.startsWith(" ")
  ) {
    $(document).ready(function () {
      $(".error").toast("show");
    });
  } else {
    const node = document.createElement("li");
     list.innerHTML += `<li>${task.value}<span><i onclick="deleteElement()" class="fa-solid fa-xmark"></i></span>`;
   
    $(document).ready(function () {
      $(".success").toast("show");
    });
    task.value = "";
    localStorage.setItem("list", JSON.stringify(list.innerText))


  }
}
var ul = document.querySelector("#list");
ul.onclick= function (event) {
    let checked=event.target;
  checked.classList.toggle("checked");
};


function deleteElement() {
  let list = document.querySelector("li");
  list.remove();
}
