// EXAMPLE 1

let num = 1
console.log(typeof num)
num = '1'
console.log(typeof num)

// EXAMPLE 2

export function sum(a, b) {
  return a + b
}

console.log(sum(num, 2))

// EXAMPLE 3

export function toTwoDecimalPlaces(n) {
  return n.toFixed(2)
}

console.log(typeof toTwoDecimalPlaces(1.2345))

// EXAMPLE 4

export function getId(person) {
  return person.id
}

console.log(getId({ name: 'Susan', employeeId: 1 }))
