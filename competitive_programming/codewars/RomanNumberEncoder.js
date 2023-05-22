function solution(number){
    // convert the number to a roman numeral
    function romanValue(value){
      if(value >= 1 && value <= 5){
        if(value == 1){
          return 'I'
        }else if(value == 4){
          return 'IV'
        }else if(value === 5){
            return 'V'
        }else{
          return 'I'.repeat(value);
        }
      }else if(value > 5 && value <= 10){
        if(value === 9){
          return 'IX';
        }else if(value === 10){
            return 'X'
        }else{
          const diff = value - 5
          return 'V' + 'I'.repeat(diff);
        }
      }else if(value > 10 && value <= 50){
        if(value == 40){
          return 'XL'
        }else if(value === 50){
            return 'L'
        }else{
          const diff = (value - 10)/10 + 1;
          return 'X'.repeat(diff)
        }
      }else if(value > 50 && value <= 100){
        if(value == 90){
          return 'XC'
        }else if(value === 100){
            return 'C'
        }else{
          const diff = (value - 50)/10 + 1;
          return 'L' + 'X'.repeat(diff)
        }
      }else if(value > 100 && value <= 500){
        if(value === 400){
          return 'CD';
        }else if(value === 500){
            return 'D'
        }else{
          const diff = (value - 100)/100 + 1
          return 'C'.repeat(diff)
        }
      }else if(value > 500 && value <= 1000){
        if(value === 900){
          return 'CM'
        }else if(value === 1000){
            return 'M'
        }else{
          const diff = (value - 500)/100 + 1
          return 'D' + 'C'.repeat(diff);
        }
      }else if (value > 1000){
        const diff = value - 1000;
        return 'M'.repeat((diff/1000)+1);
      }
    }
    let reminder;
    let count = 0;
    let newValue;
    let res = '';
    while(number != 0){
        reminder = number % 10;
        if(reminder === 0){
            count++;
            number = Math.floor(number/10);
        }else{
            newValue = reminder * Math.pow(10,count);
            console.log(newValue);
            res = romanValue(newValue) + res;
            count++;
            number = Math.floor(number/10);
            console.log(number)
        }
    }

    return res;
}
console.log(solution(3698));
