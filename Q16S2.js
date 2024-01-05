function last_Occurance(string,char)
{
    for(let i = string.length-1 ; i>=0 ; i--){
        if(char==string[i])
        {
            console.log(i+1);
            break;   
        }
    }
}

last_Occurance('hello','h');