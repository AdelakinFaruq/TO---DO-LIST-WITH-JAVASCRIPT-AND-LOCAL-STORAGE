const Todolist =
//note: if JSON.parse(localStorage.getItem('Todolist')); is remove the name and duedate will show back//
JSON.parse(localStorage.getItem('Todolist'));[{
  
  name: ' ' +'make dinner',
  dueDate:' ' +'2025 - 06-10'
}, {
  name: ' ' +'wash dishes',
  dueDate:' ' +'2025 - 06-10'
}];


renderTodolist();

 function renderTodolist(){
let TodolistHTML = ` `;
for (let i = 0; i < Todolist.length; i++){
  const TodoObject = Todolist[i];
//  const name = Todoobject.name;//
//  const dueDate = Todoobject.dueDate;//
const {name,dueDate} = TodoObject;
  const html = `
  
  <div>${name}</div>
  <div>${dueDate}</div>
  
  <button onclick="
  Todolist.splice(${i}, 1);
  renderTodolist();
  "class="delete-button">Delete</button>`;
  TodolistHTML += html;


}

localStorage.setItem('Todolist', JSON.stringify(Todolist));



document.querySelector(' '+'.js-Todolist')
.innerHTML = TodolistHTML;
 }
function addTodo (){
  const inputElement = document.querySelector(' '+'.js-name-input');
   const name = inputElement.value;
   const dateInputElement = document.querySelector(' '+'.js-due-date-input');

   const dueDate = dateInputElement.value;
   Todolist.push({
    //name: name,//
   // dueDate: dueDate,//
    name,
    dueDate
});
   

   inputElement.value = '';
   renderTodolist();

   
}


