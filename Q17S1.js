function findRoot(a,b,c)
{
    let d=(Math.pow(b,2))-(4*a*c);
    let form1=((-b)+(Math.sqrt(d)))/(2*a);
    let form2=((-b)-(Math.sqrt(d)))/(2*a);

    return  {
        root1: form1,
        root2: form2
    }
}
console.log(findRoot(2,1,-528));