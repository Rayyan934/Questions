function rayyan(string){
    const vowelRegex=/[aeiou]/;
    const ConstantRegex=/[^aeiou]/;
    let constant=0;
    let vowel=0;

    for(let i=0;i<string.length;i++)
    {
        if(vowelRegex.test(string[i]))
        {
            vowel++;
        }
        else if(ConstantRegex.test(string[i])){
            constant++;
        }
        else{
            return 'not a alphabet';
        }
    }
    return {
        vowel:vowel,
        constant:constant
    }

}
console.log(rayyan('aeiou'));