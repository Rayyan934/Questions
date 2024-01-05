function String_length(string)
{    let x=0;
    for (let i in string) {
        x=x+1;
    }

    return x;
}

console.log(String_length('hello'));