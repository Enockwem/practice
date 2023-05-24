function solution(number){
    // convert the number to a roman numeral
    const help = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    }
    function romanValue(value){
        if(Object.keys(help).find(el => help[el] === value)){
            return Object.keys(help).find(el => help[el] === value);
        }else{
            // If the value does not exist in the object.
            const str = Number(value).toString().length
            // console.log(str)
            if(str == 1){
                if(value < 5){
                    if(value === 4){
                        return 'IV';
                    }else{
                        return 'I'.repeat(value);
                    }
                }else{
                    if(value === 9){
                        return 'IX';
                    }else{
                        return 'V' + 'I'.repeat(value - 5);
                    }
                }      
            }else if(str == 2){
                if(value < 50){
                    if(value === 40){
                        return 'XL';
                    }else{
                        return 'X'.repeat(value/10);
                    }
                }else{
                    if(value === 90){
                        return 'XC';
                    }else{
                        return 'L' + 'X'.repeat((value - 50)/10);
                    }
                }   
            }else if(str == 3){
                if(value < 500){
                    if(value === 400){
                        return 'CD';
                    }else{
                        return 'C'.repeat(value/100);
                    }
                }else{
                    if(value === 900){
                        return 'CM';
                    }else{
                        return 'D' + 'C'.repeat((value - 500)/100);
                    }
                }   
            }else if(str == 4){
                return 'M'.repeat(value/1000)
            }
        }
    }
    let reminder;
    let count = 0;
    let newValue;
    let res = '';
    while(number != 0){
        reminder = number % 10;
        // number /= 10;
        newValue = reminder * Math.pow(10,count);
        res = romanValue(newValue) + res;
        count++;
        number = Math.floor(number/10)
    }

    return res
}

console.log(solution(3698))
