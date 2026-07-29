const taskElm = document.querySelector("#task");
const btnElm = document.querySelector(".btn");
const listElm = document.querySelector(".list");



btnElm.addEventListener("click", () => {
    if (taskElm.value === '') {
        alert("You must write something");
    }
    else {
     let li = document.createElement("li");
        li.innerHTML = taskElm.value;
        listElm.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskElm.value = "";
     saveTask();

});


listElm.addEventListener("click", function (e) {
   
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked")
       saveTask();
    }
     else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();

     }
});

function saveTask(){
    localStorage.setItem('myTask' , listElm.innerHTML);
}
function showTask(){
    listElm.innerHTML = localStorage.getItem("myTask");
}
showTask();