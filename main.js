console.log('Hello World!')
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let age = 250
let country = 'Finland'
let city = 'Helsinki'
let position = 'Fullstack'
let maritalStatus = 'married'
let fullName = `${firstName} ${lastName}`

console.log(
  `My name is ${fullName}. I am a ${position} developer. I based in ${city}, ${country}. I am ${age} years old and ${maritalStatus}.`
)

/*
My name is Asabeneh Yetayeh. I am a Fullstack developer. I based in Helsinki, Finland. I am 250 years old and married.

*/

let a = 4
let b = 3


console.log(`${a} + ${b} = ${a + b}`)
console.log(`${a} - ${b} = ${a - b}`)
console.log(`${a} * ${b} = ${a * b}`)
console.log(`${a} / ${b} = ${a / b}`)
console.log(`${a} % ${b} = ${a % b}`)
console.log(`${a} ** ${b} = ${a ** b}`)

// for (let i = 0; i < 101; i++){
//     console.log(`${i} x ${i} = ${i * i}`)
// }

let value = -5

let result = value > 0 ? `${value > 0} is postive` : `${value < 0} is negative`

console.log(result)
