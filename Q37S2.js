function remove_trailingSpace(string){
    let index=0;
    for(let i=0 ; i <string.length ; i++){
         if(string[i]==' '){
            index=i;
            break;
         }
    }
    let str=string.substring(0,index);
    console.log(str.length)
    return str;
}
console.log(remove_trailingSpace('hello    '));