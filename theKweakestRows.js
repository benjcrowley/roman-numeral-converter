// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

function kWeakestRows (mat, k) {
    let numSoldiersArr = []
    //run through mat twice, the nested loop counting the 1s and 0s
    for (let i = 0; i < mat.length; i++){
        let numSoldiers = 0
        for (let j = 0; j < mat[i].length; j++) {
            numSoldiers += mat[i][j]
            // console.log(numSoldiers)
        }
        console.log(`the number of soldiers in row ${i} is ${numSoldiers}`)
        numSoldiersArr.push(numSoldiers)

    }
    let weakestArr = []
    for (let i = 0; i <= k; i++) {
        let idx = numSoldiersArr.indexOf(i)
            while (idx !== -1) {
                weakestArr.push(idx)
                idx = numSoldiersArr.indexOf(i, idx +1)
            }
            
        }
    if (weakestArr.length > k) {
        weakestArr.pop()
    }
    console.log(weakestArr)
    // return `The rows ordered from weakest to strongest are ${answer}`
    }

// example 1: 
let  mat1 = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]]
let k = 3
kWeakestRows(mat1, k)

// example 2: 
mat1 = 
[[1,0,0,0],
[1,1,1,1],
[1,0,0,0],
[1,0,0,0]]
k = 2
kWeakestRows(mat1, k)

// example 3:
mat1 = 
[[1,1,1,1,0,0],
 [1,1,1,1,1,0],
 [1,1,1,0,0,0],
 [1,1,1,0,0,0],
 [1,1,0,0,0,0],
 [1,1,1,1,0,0],
 [1,1,1,1,1,1]]
k = 4
kWeakestRows(mat1, k)