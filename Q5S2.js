function Upper_to_lower(string){
   let str='';
   for(let i=0;i<string.length;i++)
   {
    let code= string.charCodeAt(i);
    if(code>=97&&code<=122){
        code=code-32;
        str+=String.fromCharCode(code);
    }
    else {
        str+=string[i];
    }
   }
   return str;
}

console.log(Upper_to_lower('Hello'));
