const takingList = [];
let qasim = "";
function add_todo_items() {
    console.log("test");
    const todoInput = document.getElementById("task-field");
    console.log("todoInput=", todoInput.value);
    takingList.push(todoInput.value);
    const taskListItems = document.getElementById("task-list-items");
    //taskListItems.innerHTML = todoInput.value;
    console.log(takingList);
    for (let i = 0; i < takingList.length; i++){
        console.log(takingList[i]);
        qasim +="<div class='task-item'><div class='square'><i class='fa-regular fa-circle'></i></div><div class='task-tile'>"+takingList[i]+"</div><div class='delete' onclick='remove()'><button class='delete-button'><i class='hgi hgi-stroke hgi-delete-02'></i></button></div></div>";
    }
    taskListItems.innerHTML = qasim;
    qasim = "";
}
function remove() {
    console.log("test");
    let a = document.getElementById("task-list-items");
    let b = document.getElementsByClassName("task-item")[0];
    a.removeChild(b);
    takingList = [];
    qasim = "";
    
    
}
   
