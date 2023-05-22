function rgb(r, g, b){
    // complete this function  
    function round(value){
        if(value > 255){
            return 255;
        }else if(value < 0){
            return 0
        }else{
            return value;
        }
    }

    let hexR = round(r) <= 15 ? '0' + round(r).toString(16): round(r).toString(16);
    let hexG = round(g) <= 15 ? '0' + round(g).toString(16): round(g).toString(16);
    let hexB = round(b) <= 15 ? '0' + round(b).toString(16): round(b).toString(16);
    
    let res = hexR + hexG + hexB;
    return res.toUpperCase();
  }

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("Basic Tests", () => {
//     Test.assertEquals(rgb(0, 0, 0), '000000')
//     Test.assertEquals(rgb(0, 0, -20), '000000')
//     Test.assertEquals(rgb(300,255,255), 'FFFFFF')
//     Test.assertEquals(rgb(173,255,47), 'ADFF2F')
//   });
// });
