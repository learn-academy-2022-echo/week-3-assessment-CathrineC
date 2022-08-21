// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibSequence", () => {
    it ("returns an array that length containing the numbers of the Fibonacci sequence", () => {
        expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
        // FAIL  ./code-challenges.test.js
        // fibSequence
        //   ✕ returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
        // ● fibSequence › returns an array that length containing the numbers of the Fibonacci sequence
        //   ReferenceError: fibSequence is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// - create a function that takes in a number greater than 2
// - output: returns an array with length containing the numbers of the Fibonacci sequence
// - create a variable with an empty array where the numbers can be placed into
// - build a for loop that will run the following logic 'num' number of times 
//      - create a condition that will check if there's atleast 2 elements in the array, if there's none, it will push 1 to the array
//      - once there are atleast 2 elements, the default logic will get the sum of the previous element and the current element and push the sum into the end of the array

const fibSequence = (num) => {
    const fibArray = []
    for (let i = 0; i < num; i++){
        if (fibArray.length < 2){
            fibArray.push(1)
        } else {
            let sum = fibArray[i-2] + fibArray[i-1]
            fibArray.push(sum)
        }
    } return fibArray
}  
console.log(fibSequence(fibLength1))
console.log(fibSequence(fibLength2))
console.log("=====Fibonacci=====")

        // PASS  ./code-challenges.test.js
        // fibSequence
        //     ✓ returns an array that length containing the numbers of the Fibonacci sequence (2 ms)


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


describe("onlyOdd", () => {
    it ("returns a new array of only odd numbers sorted from least to greatest", () => {
        expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23])
    })
})
            // FAIL  ./code-challenges.test.js
            // onlyOdd
            //   ✕ returns a new array of only odd numbers sorted from least to greatest (1 ms)
            // ● onlyOdd › returns a new array of only odd numbers sorted from least to greatest
            //   ReferenceError: onlyOdd is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// - create a function "onlyOdd" that takes in an array 
// - output: returns a new array of only odd numbers sorted from least to greatest
// - create a variable "numbersOnly" this will hold numbers only values
// - extract all the numbers in the given array (using .filter())
// - extract all the ODD numbers (using modulo)
// - sort numbers from least to greatest (using .sort())


const onlyOdd = (array) => {
    let numbersOnly = array.filter(
      item => typeof item === 'number' && (item % 2 !== 0) 
    ).sort(function (a, b) {
        return a - b;
      }) 
        return numbersOnly
    }
    console.log(onlyOdd(fullArr1))
    console.log(onlyOdd(fullArr2))
    console.log("=====OddNumbersOnly=====")

            // PASS  ./code-challenges.test.js
            // onlyOdd
            //   ✓ returns a new array of only odd numbers sorted from least to greatest (6 ms)
  

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("accSum", () => {
    it ("returns an array of the accumulating sum and an empty array should return an empty array", () => {
        expect(accSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accSum(numbersToAdd3)).toEqual([])
    })
})

            // FAIL  ./code-challenges.test.js
            //   accSum
            //     ✕ returns an array of the accumulating sum and an empty array should return an empty array (1 ms)
            //   ● accSum › returns an array of the accumulating sum and an empty array should return an empty array
            //     ReferenceError: accSum is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// - create a function "accSum" that takes in an array 
// - output: returns an array of the accumulating sum and an empty array should return an empty array
// - create a variable with an empty array where the numbers can be placed into
// - build a for loop that will run the following logic for every element in the given array  
//      - create a condition that will check if there's an element in the array, if there's none, it will return an empty array and will push the current value of the given array
//      - once there's an element, the default logic will get the sum of the value of the current index and the last inserted element of the new array and push the sum into the end of the new array

const accSum = (numArray) => {
    let currentSum = []
    for (let i = 0; i < numArray.length; i++){
        if (numArray === 0) {
            return currentSum
        }else if (currentSum.length < 1){
            currentSum.push(numArray[i]) 
        }else {
            let totalNum = (numArray[i] + currentSum[i - 1]) 
                currentSum.push(totalNum)
        }   
    } return currentSum
} 
console.log(accSum(numbersToAdd1))
console.log(accSum(numbersToAdd2))
console.log(accSum(numbersToAdd3))

            // PASS  ./code-challenges.test.js
            // accSum
            //     ✓ returns an array of the accumulating sum and an empty array should return an empty array (3 ms)
