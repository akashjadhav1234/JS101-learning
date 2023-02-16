let num = 6;
let flag= false
for(let i=2;i<num;i++){
  if(num%i==0){
    flag=false
    break
  }
}if(flag){
  console.log("this is a prime number")
}else{
  console.log("this is not a prime number")
}