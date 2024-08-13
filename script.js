const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ""){
        alert("You can't add an empty task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.classList.toggle("unchecked");
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("todoList-data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("todoList-data");
}

showTask();