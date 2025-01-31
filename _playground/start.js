'use strict'
// EXAMPLE 1
Object.defineProperty(exports, '__esModule', { value: true })
exports.num = void 0
exports.sum = sum
exports.toTwoDecimalPlaces = toTwoDecimalPlaces
exports.getId = getId
exports.num = 1
// EXAMPLE 2
function sum(a, b) {
  return a + b
}
console.log(sum(exports.num, 2))
// EXAMPLE 3
function toTwoDecimalPlaces(n) {
  return +n.toFixed(2)
}
console.log(typeof toTwoDecimalPlaces(1.2345))
var susan = {
  name: 'Susan',
  employeeId: 1,
  isAdmin: true,
}
function getId(person) {
  return person.employeeId
}
console.log(getId(susan))
