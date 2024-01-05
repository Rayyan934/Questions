function Reverse(string)
{
    let str2='';
    for(let i=string.length-1;i>=0;i--)
    {
        str2+=string[i];
    }
    return str2;
    
}
console.log(Reverse('rayyan'));