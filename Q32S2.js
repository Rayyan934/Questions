function count_occurance(string,char){
    let x=0;
    for(let i=0;i<string.length;i++){
        if(char==string[i]){
            x++;
        }
    }
    return x;
}
console.log(count_occurance('hello','l'));