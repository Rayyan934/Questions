function length_words(string){
    let words=0;
    for(let i=0;i<string.length;i++){
        if(string[i] == " "){
            words++;
        }
    }
    words=words+1;
    return words;
}
function reverseWord(string){
    let arr = string.split(" ");
    let n=length_words(string);
    let str='';
    
    for(let i=n-1;i>=0;i--){
       str+=arr[i];
    }

   return Str;
}
console.log(reverseWord('hello world rayyan'));