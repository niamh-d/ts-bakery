import { expect, test } from 'vitest'
import { sum, getId, toTwoDecimalPlaces } from './start'
import { num } from './start'

test('verify variable num is of type number', () => {
  expect.soft(typeof num).toBe('number')
})

test('function sum add two numbers', () => {
  expect.soft(sum(1, 2)).toBe(3)
  expect.soft(sum(num, 2)).toBe(3)
})

test('function toTwoDecimalPlaces returns a number to two decimal places', () => {
  expect.soft(typeof toTwoDecimalPlaces(1.2345)).toBe('number')
  expect.soft(toTwoDecimalPlaces(1.2345)).toBe(1.23)
})

test('gets employee id', () => {
  expect.soft(getId({ name: 'Susan', employeeId: 1 })).toBe(1)
})
