function remove_whitespaces(string)
{ 
    let str = string ;
    for(let i=0 ;i<string.length;i++)
    {
        if(string[i]==' '){
         str = str.replace(' ','');
        }
    }
    return str;
}
console.log(remove_whitespaces('hello my name is rayyan'));