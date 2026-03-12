console.log("OTP sent successfully");
let c = 10;

 let s = setInterval(()=>{
  if(c!=0){
 console.log(c--);
  }
else {
  console.log("Resend OTP")
  clearInterval(s);
}
},1000)
 