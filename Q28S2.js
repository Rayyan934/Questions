function rayyan(string,char)
{
    let str = '';
    for(let i=string.length-1 ; i >= 0; i--){
        if(char==string[i]){
        str=string.substring(0,i)+'h'+string.substring(i+1);
        continue;
        }
        }
        return str;
    
    }
    console.log(rayyan('hello','l'));