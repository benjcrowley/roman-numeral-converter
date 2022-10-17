// Given a roman numeral, convert it to an integer.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
var romanToInt = function(s) {
    let romanInt = 0
    let numArr = [1,5,10,50,100,500,1000]
    let letterArr = ['I','V','X','L','C','D','M']
    
    // if (s.includes("IV") || s.includes("IX") || s.includes("XL")|| s.includes('XC') || s.includes('CD') || s.includes('MC') ) {
        // console.log('needs subtraction')
        // let index = letterArr.indexOf(s[i])
        for (let i = 0; i < s.length; i++) {

            if (numArr[letterArr.indexOf(s[i])] < numArr[letterArr.indexOf(s[i+1])]) {
                
                romanInt -= numArr[letterArr.indexOf(s[i])]

            } else {

                romanInt += numArr[letterArr.indexOf(s[i])]
            }

        }
            
    // } else{

    //     for (let i = 0; i < s.length; i++) {
    //     }
        
    // }
    return romanInt
};

console.log(romanToInt("IV")) //returns 4
console.log(romanToInt("MMMCMXCIX")) //returns 3999
console.log(romanToInt("VI")) //returns 6
console.log(romanToInt("MCMXCIV")) //returns 2216 -> should return 1994
console.log(romanToInt("LVIII")) //returns 58
console.log(romanToInt("MDI")) //returns 1501
