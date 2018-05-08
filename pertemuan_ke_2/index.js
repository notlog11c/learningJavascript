/**
 * cara ke 1
 * 1 Function biasa
 */

// function isEven(number) 
// {
//     return number % 2 === 0
// }

/**
 * cara ke 2
 * 2. Function simpan di variable
 */

// const isEven = function(number) {
//     return number % 2 === 0
// }

/** 
 * cara ke 3
 * 3. arrow Function
 */

// const isEven = (number) => {
//     return number % 2 === 0
// }

/**
 * cara ke 3 bs seperti ini
 * tapi, jika parameter(number adalah parameternya) lebih dari satu, maka menggunakan ()
 * ini juga digunakan jika data hanya return 1 data. 
 */

const isEven = number => number % 2 === 0

console.log(isEven(10), 10)
console.log(isEven(7), 7)
