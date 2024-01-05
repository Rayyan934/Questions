function lower_to_upper(string){
    let str='';
    for(let i=0;i<string.length;i++)
    {
     let code= string.charCodeAt(i);
     if(code>=65&&code<=90){
         code=code+32;
         str+=String.fromCharCode(code);
     }
     else {
         str+=string[i];
     }
    }
    return str;
 }
 
 console.log(lower_to_upper('Hello'));
 