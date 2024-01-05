function remove_bothSpaces(string) {
    let index1= 0;
    let index2= 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i]!==' ') {
            index1 = i;
            break;
        }
    }
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] !== ' ') {
            index2 = i;
            break;
        }
    }

    let str = string.substring(index1, index2 + 1); 
    console.log(str.length);
    return str;
}

console.log(remove_bothSpaces('   hello   ')); 
