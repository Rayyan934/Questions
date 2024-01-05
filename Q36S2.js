function remove_leadingSpace(string){
    let index=0;
    for(let i=0 ; i < string.length  ; i++){
         if(string[i]!==' '){
            index=i;
            break;
         }
    }
    let str=string.substring(index);
    return str;
}
console.log(remove_leadingSpace('   hello'));