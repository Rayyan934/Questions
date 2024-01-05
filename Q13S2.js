function palindrome(string)
{
    let str2='';
    for(let i=string.length-1;i>=0;i--)
    {
        str2+=string[i];
    }
    if (str2.toUpperCase() == string.toUpperCase())
    {
        return 'palindrome';
    }
    else 
    {
        return 'not palindrome';
    }
}
console.log(palindrome('Naman'));
console.log(palindrome('rayyan'));

