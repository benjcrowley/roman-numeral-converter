//Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Input: head = [1,2,2,1]
// Output: true
// Input: head = [1,2,2,1]
// Output: true

var isPalindrome = function(head) {
    for (let i = 0; i < head.length / 2; i++) {
        console.log(head[i], head[head.length -1 - i])

        if (head[i] !== head[head.length -1 - i]) {

            return false
        }
    }
    return true
};

console.log(isPalindrome([1,2,2,1]))
console.log(isPalindrome([1,2]))
console.log(isPalindrome([1,2,3,1]))
console.log(isPalindrome([1,2,2,1,2,2,1]))