function remove_double_letters(string){
    let str = '' ;
    for(let i = 0 ; i < string.length; i++)
    {
        for(let j=0 ; j<=i ; j++){
            if(string[i]==string[j])
            {
                break;
            }
            if(i==j){
                str+=string[i];  
            }

        }
    }
    return str;
   
}
console.log(remove_double_letters('helleo'));