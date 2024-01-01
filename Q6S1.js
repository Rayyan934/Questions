let year=2023;
let result;
if(year%4==0){
  if(year%100==0){
    if(year%400==0){
     result="It's a leap year";
    }
     else{
     result="It's not leap year";
     }
  }
  else{
    result="It's a leap year";
  }
}
else{
    result="It's not leap year";
}
console.log(result);