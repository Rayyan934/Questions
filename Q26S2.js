function replace_first_occurance(string,char){
let replacementChar='h';
let replacedString = string.replace(char, replacementChar);
return replacedString;
}
console.log(replace_first_occurance('hello','l')); 
