function findTriangle(x,y,z){
    let result=x+y+z;
if(result==180){
    if(x==60&&y==60&&z==60){
        return'it is a equilateral triangle';
    }
    else if (x==y||y==z||z==x){
        return'Its a isosceles triangle';
    }
    else {
         return'Its a scelen triangle';
    }

  }
        else
        {
            return'Its not a triangle';
        }
    
  
   
}
    console.log(findTriangle(60,60,60));
    console.log(findTriangle(50,50,70));
    console.log(findTriangle(60,50,70));
    console.log(findTriangle(70,70,70));
