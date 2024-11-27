document.getElementById("btn").addEventListener('click', function(){
    const taskinput = document.getElementById("text")
    const tasktext = taskinput.value.trim();

    if (tasktext !== "") {
        addTask(tasktext);
        taskinput.value = "";
    }
});

function addTask(tasktext){
    const tasklist = document.getElementById("tasklist");

    const li =document.createElement("li")
    li.textContent = tasktext;

    const removeBtn = document.createElement('button')
    removeBtn.textContent = "remove";
    removeBtn.className = "remove";
    removeBtn.addEventListener('click', function(){
        li.remove();
    });

    li.appendChild(removeBtn)

    li.addEventListener('click', function(){
        li.classList.toggle("completed")
    });

    tasklist.appendChild(li);

}

const button1 =document.getElementById("btn1").addEventListener('click', function(){

})

document.getElementById("btn1").addEventListener('click', function (){
    const tasks = document.querySelectorAll('#tasklist li');
    tasks.forEach(function(task) {
        task.style.display = "block";
        
    });
});

document.getElementById("btn2").addEventListener('click', function(){
    const tasks = document.querySelectorAll('#tasklist li');
    tasks.forEach(function(task){
        if (task.classList.contains('completed')){
            task.style.display = "block"
        }
        else{
            task.style.display = "none"
        }

    });
});

document.getElementById("btn3").addEventListener('click', function(){
    const tasks = document.querySelectorAll("#tasklist li")
    tasks.forEach(function(task){
        if (task.classList.contains('completed')){
            task.style.display = "none"
        }
        else{
            task.style.display = "block"
        }
    })
})