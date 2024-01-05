function Occurance(string,char)
{   
    let arr = [];
    for(let i = string.length-1 ; i>=0 ; i--){
        if(char==string[i])
        {
           arr.push(i);   
        }
    }
    return arr;
}

console.log(Occurance('hello','l'));