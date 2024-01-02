function findTriangle(x,y,z)
{
    let result=x+y+z;
    if(result==180){
        return 'It is triangle';
    }
    else{
        return'Not a triangle';
    }
}

console.log(findTriangle(60,60,60));
console.log(findTriangle(70,60,60));