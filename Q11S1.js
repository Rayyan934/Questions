function EnterDays(number){
    if(number<=7)
    {
      switch(number)
      {
        case 1:
            return 'monday';
        case 2:
            return 'tuesday';
        case 3:
            return 'wednesday';
        case 4:
            return 'thusday';
        case 5:
            return 'friday';
        case 6:
            return 'saturday';
        case 7:
            return 'sunday';
      }
    }
    else {
        return 'Not valid'
    }
}
console.log(EnterDays(4));
console.log(EnterDays(10));