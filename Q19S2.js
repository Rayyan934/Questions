function highest_Frequency(string){
    let frequency={};
    for (let char of string) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }   
    let maxfrequency=0;
    let maximum_letter;
   
    for(let char in frequency){
        if(frequency[char] > maxfrequency){
           maxfrequency=frequency[char];
            maximum_letter=char;
        }
    }
    return maximum_letter;
   }
console.log(highest_Frequency('hello'));