export function thousandOperator(amount){
    // This is a regular expression that splits the 'amount' string into chunks of 3substring, 
    //the \d shows it must be a number
    let regex = /\d{2,3}/g
    let result;
    // I have used the string template to turn the amount in Number to String
    let str = `${amount}` 

    // regular expression to check whether there is a decimal point in the string
    let regDecimalPoint = /[.]/

    if(regDecimalPoint.test(amount)){
        // I will take the string at index 0 and work on that
        let str1 = str.split(".")[0] 
        let len = str1.length
        if(len%3 != 0){
            if(len%3 === 1){
                result = str1.slice(0,1)+","+str1.slice(1).match(regex).join(",")
            }else{
                result = str1.slice(0,2)+","+str1.slice(2).match(regex).join(",")
            }
        }else{
            result = str1.match(regex).join(",")
        }
    }else{
        let len = str.length
        if(len%3 != 0){
            if(len%3 === 1){
                result = str.slice(0,1)+","+str.slice(1).match(regex).join(",")
            }else{
                result = str.slice(0,2)+","+str.slice(2).match(regex).join(",")
            }
        }else{
            result = str.match(regex).join(",")
        }
    }
    return result
}
