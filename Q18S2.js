function Occurance(string,char)
{   
    let x=0;
    for(let i = string.length-1 ; i>=0 ; i--){
        if(char==string[i])
        {
           x++;
        }
    }
    return x;
}

console.log(Occurance('hello','l'));