 const c = ["javascript", "react", "node", "mongodb", "express"];

    let res1 = c.filter(element=> element.length>5);
    console.log(res1);


    let res2 = c.map(element=>element.toUpperCase());
    console.log(res2);

    let res3=c.reduce((acc,element)=>acc+element)
    console.log(res3); 

