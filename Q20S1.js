function Gross_salary(BS){
    let Gross_salary;
    if(BS<=10000){
        let HRA=(20/100)*BS;
        let DA=(80/100)*BS;
        Gross_salary=BS+DA+HRA;
        return Gross_salary;
    }
    else if(BS>10000&&BS<=20000)
    {
        let HRA=(25/100)*BS;
        let DA=(90/100)*BS;
        Gross_salary=BS+DA+HRA;
        return Gross_salary;
    }
    else 
    {
        let HRA=(30/100)*BS;
        let DA=(95/100)*BS;
        Gross_salary=BS+DA+HRA;
        return Gross_salary;
    }
    

}
console.log(Gross_salary(12000));