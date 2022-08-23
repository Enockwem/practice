let removeComma = (string)=>{
    // This is the regular expression that you are supposed to work on 
    let reg = /[,]/g
    return string.replace(reg,"")
}