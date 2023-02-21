let num = 1;
while(num < 101){
    if(num%3 === 0){
        console.log("Fizz");
        num += 1;
    }
    else if(num%5 === 0){
        console.log("Buzz");
        num += 1;
    }
    else{
        console.log("FizzBuzz");
        num += 1;
    }
}