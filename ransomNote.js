// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

function canConstruct (ransomNote, magazine) {
    let magazineArr = magazine.split('')
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazineArr.includes(ransomNote[i])) {
            // console.log(magazineArr)
            magazineArr.splice(magazineArr.indexOf(ransomNote[i]),1)
        } else {
            return false
        }
    }
    return true
}

// Example 1:

// Input: ransomNote = "a", magazine = "b"
console.log(canConstruct('a','b'))
// Output: false

// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
console.log(canConstruct('aa','ab'))
// Output: false

// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
console.log(canConstruct('aa','aab'))
// Output: true

// example 4 
console.log(canConstruct('asdfghjklasdfghjkl','asdfghjklasdfghjklasdfghjkoplkjhgfdsa'))
