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

// const isEven = number => number % 2 === 0
// contoh untuk di atas
// console.log(isEven(10), 10)
// console.log(isEven(7), 7)


// const joinArray = arr => arr.join('-')
// parameternya satu dan berupa array
// console.log(joinArray([1,2,3,4,5,6,7,8,9,]))

// digunakan apabila memasukkan data yang parameternya banyak (didalam sumAll(1,2,3++) ini adalah parameternya)
// const sumAll = (...number) => console.log(number)
// sumAll(1,2,3,4,5,6,7,8,9)


// ini namanya distractering ({ parameter })
// const printBioData = ({name, age}) => console.log(`My name is ${name}, my age is ${age} yo`)

// printBioData({ name : 'notLog11c' , age : '18' })

/**
 * conditional
 */

//  const nilai = 98

//  if (nilai > 90) {
//      console.log ('excellent')
//  }else if (nilai > 75 && nilai < 90){
//      console.log ('just so so')
//  }else{
//      console.log ('bad')
//  }


// ternery untuk mempersingkat kodingan, dari contoh di atas. (if else)
const number = 30

number > 85 
 ? console.log('excellent')
 : number > 50 && number < 85
    ? console.log('just so so')
    : console.log('bad')

