function validateTitle(title) {
       if(!title){
       return false
       }
       else if(title.length<=3)
        return false
      else 
        return true
}

function validatePriority(priority){
   if(priority ==='low'|| priority==='medium'||priority==='high'){
    return true
   }
  else {
    return false
  }
}

function validateDuedate(){
   return true
}

export {validateTitle,validatePriority,validateDuedate}