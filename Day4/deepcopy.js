const order = {
     orderId: "ORD1001",
    customer: {
  name: "Anita",
  address: {
  city: "Hyderabad",
     pincode: 500085
    }
    },
   items: [
  { product: "Laptop", price: 70000 }
 ]
 };

 let copyOrder = structuredClone(order)
 order.customer.address.city="hyd"
 order.items[0].price="60000"

 console.log(order)
 console.log(copyOrder)