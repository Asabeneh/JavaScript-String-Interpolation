## String Interpolation

```javascript
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
  `My name is ${fullName}. I am a ${position} developer. I am based in ${city}, ${country}. I am ${age} years old and ${maritalStatus}.`
)


```js

let a = 4
let b = 3

console.log(`${a} + ${b} = ${a + b}`)
console.log(`${a} - ${b} = ${a - b}`)
console.log(`${a} * ${b} = ${a * b}`)
console.log(`${a} / ${b} = ${a / b}`)
console.log(`${a} % ${b} = ${a % b}`)
console.log(`${a} ** ${b} = ${a ** b}`)

```

```js

let value = -5
let result = value > 0 ? `${value} is positive` : `${value} is negative`
console.log(result)

```