const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let res1 = cart.filter((c) => c.inStock === true);
console.log(res1);

 let res2 = cart.map((c)=>{
  return {name:c.name,
    totalPrice:c.price*c.quantity}
})
console.log(res2);

let res3 = cart.reduce((acc,c) =>{ return acc+c.price},0)
console.log(res3);
 

let res4 = cart.find(c => c.name === 'Mouse')
console.log(res4);

let res5 = cart.findIndex(c => c.name === 'Keyboard')
console.log(res5);