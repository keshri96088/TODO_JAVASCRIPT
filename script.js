
var taskHistory = [];

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
    if (taskText.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", function() {
            li.classList.toggle("finished");
        });
        taskList.appendChild(li);
        taskInput.value = "";
        //add n update
        
        taskHistory.push(taskText);
        
        
        displayTaskHistory();
        
        // delete
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            li.remove(); 
            removeFromTaskHistory(taskText);
            displayTaskHistory();
        });
        li.appendChild(deleteBtn);
        
        // update
        var updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.addEventListener("click", function(event) {
            event.stopPropagation(); 
            var updatedTask = prompt("Update task:", taskText); 
            if (updatedTask !== null && updatedTask.trim() !== "") {
                li.textContent = updatedTask; 
                removeFromTaskHistory(taskText);
                taskHistory.push(updatedTask);
                displayTaskHistory();
            }
        });
        li.appendChild(updateBtn);
    } else {
        alert("Please enter a task!");
    }
}

function removeFromTaskHistory(task) {
    var index = taskHistory.indexOf(task);
    if (index !== -1) {
        taskHistory.splice(index, 1);
    }
}


function displayTaskHistory() {
    var historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    taskHistory.forEach(function(task) {
        var li = document.createElement("li");
        li.textContent = task;
        historyList.appendChild(li);
    });
}


// // let abc = document.querySelector("aa");
// // console.dir(aa.innerText);

// // aa.innerText = aa.innerText+"hello";

// const promiseOne = new Promise(function(resolve,reject)
// {
//  setTimeout(function() {
//     console.log("hello");
//  },1000)   
// }).then(function(){
//     console.log("consumed");
// })

// const promiseTwo = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         resolve({username:"suraj",email:"suraj@hello.com"})
//     },1000)
// })
// promiseTwo.then(function(user)
// {
//     console.log(user)
// })

// search-input
// create -button 
// update-b-b
// delete-b
// show-p tag
// Original array

// map ,
// filter,
// Promise
// type casting
// data types 
// dom
// == and ===
