function Copy_string(string){

  let string2="";
  for(let i in string){
    string2+=string[i];
  }

  return string2;
}
console.log(Copy_string('hello'));