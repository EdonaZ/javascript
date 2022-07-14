document.querySelector('#addTask').onclick = function(){
    if(document.querySelector('#newTask input').value.length == 0){
        alert("Enter a task that needs to be done...");
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskDescription">
                    ${document.querySelector('#newTask input').value}
                </span>
                <button class="delete">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>

        `;

       var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newTask input").value = ""; 
    }
}
