function contactenate(str1,str2)
{
    for(let i in str2){
        str1+=str2[i];
    }

    return str1;
}
console.log(contactenate('hello','world'));