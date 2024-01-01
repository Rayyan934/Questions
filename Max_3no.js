let x=2,y=3,z=4;
let result;


if(x<z&&y<z){
  result=z;
}
else if(x<y&&z<y){
    result=y;
}
else{
    result=x;
}
console.log(result);