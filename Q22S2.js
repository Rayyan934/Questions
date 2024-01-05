function rayyan(string,char)
{
    let str = '';
    let removed=false;
    for(let i=0 ; i < string.length ; i++){
        if(!removed&&char==string[i]){
            removed =true;
        }
        else{
            str+=string[i];
        }
    }
    return str;
}
console.log(rayyan('hello','l'));