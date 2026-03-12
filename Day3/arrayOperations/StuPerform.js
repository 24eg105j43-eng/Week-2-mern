const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let res = students.filter((element=> element.marks>=40))
console.log(res)
let res1=students.reduce((acc,s)=>acc+s.marks/students.length,0)
console.log(res1);

let res2=students.map((s)=>{
  if(s.marks>=90 && s.marks<=100)
    return 'A'
  else if(s.marks>=75 && s.marks<90)
    return 'B'
  else if(s.marks>=60 && s.marks<75)
    return 'C'
  else
    return 'D';
})
console.log(`GradesArray:${res2}`);

let res3 = students.find((s)=>{
  if(s.marks===92)
    return {s};
})
console.log(res3); 

let res4 = students.findIndex((element)=>{
if(element.name==="Kiran")
   return element;
})

console.log(res4); 