 function total_bill(units){
    let bill=0;
    if(units>250)
    {
        bill=units*1.5;
        return bill;
    }
    else if(units<=250&&units>150)
      {
         bill=units*1.2;
         let z=units-100
         bill+=total_bill(z);
      }
    else if (units<=150&&units>50)
      {
            bill=units*0.7;
            let z=units-100;
            bill+=total_bill(z);
      }
    else if(units<=50&&units>0){
        bill =units *0.5;
        let z=units-50;
        bill+=total_bill(z);
      }
      
        return bill;
      
      
    }
 

 let unit_charges=total_bill(250);
 console.log(unit_charges);
 let additional_charge=0.2*unit_charges;
 let total_charge=unit_charges+additional_charge;
 console.log(total_charge);