let string = "b";
let result;

switch(string){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        result = "String is a vowel";
        break;
    default:
        result = "String is not a vowel";
        break;
}

console.log(result);
