import {validateTitle,validatePriority,validateDuedate} from './validator.js';

const tasks = [];
  function addTask(title, priority, dueDate) {
      if(validateTitle(title) && validatePriority(priority) && validateDuedate(dueDate)){
        tasks.push({Title:title,Priority:priority,Duedate:dueDate});
      }
      
  }


  function getAllTasks() {
          console.log(tasks);       
  }
  function completeTask(taskId){
    for(let i=0;i<tasks.length;i++){
      if(taskId===i){
        tasks.pop(i);  
    } 
  }
}


export {addTask,getAllTasks,completeTask};