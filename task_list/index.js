let task = [];
let addbtn = document.getElementById('add');
let input = document.getElementById('input');

addbtn.addEventListener('click',function(){
    
})

let display = function(){
    let ul = document.getElementById('task-list');
    ul.innerText = " ";
    for(let i=0;i<task.length;i++){
        let singleTask = task[i];
        let newE = document.createElement('li');
        newE.innerText = singleTask;
    }
}