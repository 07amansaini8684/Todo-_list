const inputbox = document.getElementById("input")
const listcontainer = document.getElementById("list_container")
const btn = document.getElementById("btn")



btn.addEventListener("click",()=>{
    if(inputbox.value === ""){
        alert("Please enter a task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        againempty();
    }
    savedata();
})

inputbox.addEventListener('click', () => {
    inputbox.style.outline = 'none';
});

const againempty = ()=>{
    inputbox.value = ""
}

listcontainer.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        savedata()
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentNode.remove();
        savedata()
    }
},false)


function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showTask();