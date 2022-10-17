// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ 
// customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// // A customer's wealth is the amount of money they have in all their bank accounts. 
// The richest customer is the customer that has the maximum wealth.

function wealth (accounts) {
    let highestWealth = 0
    m = accounts.length
    let wealth = 0
    let wealthArr = []
    for (let i = 0; i < m; i ++) {
        n = accounts[i].length
        wealth = 0
        for (let j = 0; j < n; j++) {
            wealth += accounts[i][j]
        }
        wealthArr.push(wealth)
    }
    highestWealth = wealthArr[0]
    for (let i = 0; i < wealthArr.length; i ++) {
        // console.log(wealthArr[i])
        if (wealthArr[i] > highestWealth) {
            highestWealth = wealthArr[i]

        }
    }
        return highestWealth
}

// examples
let accounts = [[1,2,3],[3,2,1]]
console.log(wealth(accounts))
//output 6

// example 2
accounts = [[1,5],[7,3],[3,5]]
console.log(wealth(accounts))
//ouput 10

// example 3
accounts = [[2,8,7],[7,1,3],[1,9,5]]
console.log(wealth(accounts))

// Output: 17

// example 4
accounts = [[2,8,17],[7,1,13],[11,9,5],[12,3,9]]
console.log(wealth(accounts))
// => 27