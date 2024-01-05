function first_Occurance(string,char)
{
    for(let i=0;i<string.length;i++){
        if(char==string[i])
        {
            console.log(i+1);
            break;   
        }
    }
}

first_Occurance('hello','h');