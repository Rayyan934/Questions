function rayyan(string,char)
{
    let str = '';
    for(let i=0 ; i < string.length ; i++){
        if(char==string[i]){
            continue;
        }
        else{
            str+=string[i];
        }
    }
    return str;
}
console.log(rayyan('hello','l'));