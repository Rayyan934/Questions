function differentiate(string){
    let alphabet=0;
    let special_char=0;
    let digits=0;
    for(let i=0;i<string.length;i++)
    {
        if(/\d/.test(string[i]))
        {
            digits++;
        }
        else if(/[a-zA-z]/.test(string[i]))
        {
            alphabet++;
        }
        else {
            special_char++;
        }
    }
    return{
        digits:digits,
        alphabet:alphabet,
        special_char:special_char
    }
}
console.log(differentiate('abc12@'));