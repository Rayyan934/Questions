function checkCharType(char){
const digitRegex=/[0-9]/;
const letterRegex=/[a-zA-z]/
if(digitRegex.test(char)){
    return 'digit';
}
else if(letterRegex.test(char)){
    return 'letter';
}
else{
    return 'Special char';
}
}

console.log(checkCharType('a'));
console.log(checkCharType('5'));
console.log(checkCharType('@'));