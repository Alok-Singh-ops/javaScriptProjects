const todoForm = document.querySelector(".todo-form");
const listItemsUl = document.querySelector("#list-items");
const inputText = document.querySelector('#add-todos');
const clearAll = document.querySelector("#clear");

// Load event listener
loadEventListener();

function loadEventListener() {
  todoForm.addEventListener("submit",addtodos);
  listItemsUl.addEventListener("click",deletetodos,false);  
  clearAll.addEventListener('click',deleteAll);
}

function addtodos(e) {
  if(inputText.value ===''){
    alert("Add todos");
  }
  const newItems = document.createElement("li");
  newItems.className = "list-item"
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type" , "checkbox");
  checkBox.className = "item checked"
  const labelItems = document.createElement("label");
  labelItems.className = "checked";
  labelItems.appendChild(document.createTextNode(inputText.value))
  const link = document.createElement("a");
  link.setAttribute("href","#");
  link.appendChild(document.createTextNode("X"));
  
  newItems.appendChild(checkBox);
  newItems.appendChild(labelItems);
  newItems.appendChild(link);

  listItemsUl.appendChild(newItems);
  inputText.value = '';
  e.preventDefault();
}

function deletetodos(e) {
  if (e.target.parentElement.classList.contains('list-item')) {
    e.target.parentElement.remove();
  }
}

function deleteAll(e) {
  
  const allItem = document.querySelectorAll(".list-item");
  allItem.forEach(function(item){
    item.remove();
  });
  
}

const checkInput  = document.getElementsByClassName('checked');

for (let index = 0; index < checkInput.length; index++) {
  checkInput[index].addEventListener('click',function (e) {
    e.stopPropagation();
  })
  
}

//commenting