function Grade(P,C,B,M,C)
{
    let result=(P+C+B+M+C)/500;
    let percentage=result*100;
    if(percentage>=90)
    {
        return 'Grade A';
    }
    else if(percentage<90&&percentage>=80)
    {
        return 'Grade B';
    }
    else if(percentage<80&&percentage>=70)
    {
        return 'Grade C';
    }
    else if(percentage<70&&percentage>=60)
    {
        return 'Grade D';
    }
    else if(percentage<60&&percentage>=40)
    {
        return 'Grade D';
    }
    else
    {
        return 'Grade F';
    }

}
console.log(Grade(79,67,80,90,96));