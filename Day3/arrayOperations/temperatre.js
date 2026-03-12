const t = [32, 35, 28, 40, 38, 30, 42];

 res=t.filter((element)=> element>35);
 console.log(res);
 res1 = t.map(element=> element*(9/5)+32);
  console.log(res1)
 res2 = t.reduce((acc,element)=>
  {  acc+element
    return (acc/t.length);
})
console.log(res2);
let res3 = t.find(element=>element>40 )
console.log(res3);
let res4 = t.findIndex(element=>element===28)
console.log(res4); 

