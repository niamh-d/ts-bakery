// EXAMPLE 1

export const num = 1

// EXAMPLE 2

export function sum(a: number, b: number): number {
  return a + b
}

console.log(sum(num, 2))

// EXAMPLE 3

export function toTwoDecimalPlaces(n: number): number {
  return +n.toFixed(2)
}

console.log(typeof toTwoDecimalPlaces(1.2345))

// EXAMPLE 4

type Person = {
  name: string
  employeeId: number
  isAdmin: boolean
}

const susan: Person = {
  name: 'Susan',
  employeeId: 1,
  isAdmin: true,
}

export function getId(person: Person): number {
  return person.employeeId
}

console.log(getId(susan))
