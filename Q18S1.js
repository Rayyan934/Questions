function profit_loss(SP,BP)
{
    if(BP<SP){
        let profit =SP-BP;
        let loss=0;
        return{
            profit:profit,
            loss:loss
        }
    }
    else {
        let loss=BP-SP;
        let profit=0;
        return {
            profit:profit,
            loss:loss
        }
    }
}

console.log(profit_loss(90,20));
console.log(profit_loss(20,90));