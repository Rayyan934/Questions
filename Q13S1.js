function No_notes(amount){
    let x = 0;
 
    if (amount > 2000) {
       x = x + 1;
       let z = amount - 2000;
       x += No_notes(z);
    } else if (amount < 2000 && amount > 500) {
       x = x + 1;
       let z = amount - 500;
       x += No_notes(z);
    } else if (amount < 500 && amount > 100) {
       x = x + 1;
       let z = amount - 100;
       x += No_notes(z);
    } else if (amount < 100 && amount > 50) {
       x = x + 1;
       let z = amount - 50;
       x += No_notes(z);
    } else if (amount < 50 && amount > 20) {
       x = x + 1;
       let z = amount - 20;
       x += No_notes(z);
    } else if (amount < 20 && amount >= 10) {
       x = x + 1;
       let z = amount - 10;
       x += No_notes(z);
    }
 
    return x;
 }
 
 const amount = 2734;
 const totalNotes = No_notes(amount);
 console.log(totalNotes);
 



