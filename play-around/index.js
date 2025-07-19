let taking_input = [];
let qasim = '';

function addTask() {
    const task_Input = document.getElementById("task-input");
    const task_list = document.getElementById("task-list");
    taking_input.push(task_Input.value);
    console.log(task_Input.value);
    for (let i = 0; i < taking_input.length; i++) {
        qasim += "<li class='hashim'>" + taking_input[i] + "<i class='fa-solid fa-trash delete-button'></i></li>";
        task_list.innerHTML = qasim;
    }
        qasim = '';
    
    let a = document.getElementsByClassName("delete-button");
    for (let i = 0; i < a.length; i++){
        a[i].addEventListener("click", function (event) {
            event.target.parentElement.remove()
            taking_input = [];
            
        }
        );
    }
      
    
} 