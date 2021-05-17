const mainForm = document.getElementById('mainForm');  
const todoText = document.getElementById('todoText');
const ele = document.getElementById('todoList');


mainForm.addEventListener('submit',function (e) {
  const list = document.createElement("li");
  const text = todoText.value;
  list.appendChild(document.createTextNode(text));
  ele.appendChild(list);
  e.preventDefault();
});

console.log("object");
