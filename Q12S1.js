function enterMonth(Num)
{
    if(Num==1||Num==3||Num==5||Num==7||Num==8||Num==10||Num==12)
    {
        return '31 days';
    }
    else if(Num==4||Num==6||Num==9||Num==11)
    {
        return '30 days';
    }
    else if(Num==2)
    {
        return '28 days or 29 days';
    }
    else{
        return 'not valid'
    }

}
console.log(enterMonth(4));
console.log(enterMonth(13));
console.log(enterMonth(2));