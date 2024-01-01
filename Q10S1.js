function checkCharType(char){
    const lowercaseRegex=/[a-z]/;
    const uppercaseRegex=/[A-z]/;

    if (lowercaseRegex.test(char)){
        return 'lowecase';
    }
    else if (uppercaseRegex.test(char)){
        return 'uppercase';
    }
    else{
        return 'Not alphabet'
    }
}
console.log(checkCharType('a'));
console.log(checkCharType('A'));