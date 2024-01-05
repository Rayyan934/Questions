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
console.log(rayyan('Hello'));