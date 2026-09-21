const button = document.querySelector("button");

const input = document.querySelector("input");
const taskContainer = document.querySelector(".task-container")

button.addEventListener("click",function(){
    const task = input.value;

    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click" , function(){
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        }
        else{
            li.style.textDecoration = "line-through";
        }
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click",function(){
        li.remove();
    });
    li.appendChild(deleteButton);


    taskContainer.appendChild(li);

    input.value="";

});