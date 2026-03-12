
const t = [78, 92, 35, 88, 40, 67];



res=t.filter((element)=> element>40);
 console.log(res);
 res1 = t.map(element=> element+5);
  console.log(res1)
 res2 = t.reduce((max,mark)=>
  { 
    return mark>max?mark:max;
})
console.log(res2);
let res3 = t.find(element=>element<40)
console.log(res3);
let res4 = t.findIndex(element=>element===92)
console.log(res4); 

