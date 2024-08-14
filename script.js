const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ""){
        alert("You can't add an empty task!");
    } else {
        let li = document.createElement("li");
        li.classList.add("unchecked")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        if(e.target.classList.contains("checked")){
            e.target.classList.remove("checked");
            e.target.classList.add("unchecked");

        } 
        else if(e.target.classList.contains("unchecked")){
            e.target.classList.remove("unchecked");
            e.target.classList.add("checked");

        }
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("todoList-data", listContainer.innerHTML);
}

function clearAllData(){
    while(listContainer.firstChild){
        listContainer.removeChild(listContainer.firstChild);
    }
    localStorage.removeItem("todoList-data");
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("todoList-data");
}

showTask();