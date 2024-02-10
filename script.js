//EVENT LISTENERS
document.querySelector("#task-add").addEventListener("click",()=>{
    addTask(document.querySelector("#task-name").value)
    document.querySelector("#task-name").value="";
})
document.querySelector(".task-output").addEventListener("click",({target})=>{
    console.log(target.classList[0]);
    if(target.classList[0]==["task-done"]){
        target.parentElement.parentElement.classList.toggle("toggleLinethrough");
    }
    if(target.classList=="task-delete"){
        target.parentElement.parentElement.remove();
    }
}) 

//FUNCTIONS
function addTask(newTask){
    const display=document.querySelector(".task-output");
    const li=document.createElement("li");
    const btns=document.createElement("span");
    const taskDone=document.createElement("button");
    const taskDelete=document.createElement("button");
    taskDone.classList.add("task-done");
    taskDelete.classList.add("task-delete");
    btns.appendChild(taskDone);
    btns.appendChild(taskDelete);
    taskDelete.textContent="🗑";
    taskDone.textContent="✓";
    li.textContent=`${newTask}`;
    li.appendChild(btns)
    display.appendChild(li); 
}
