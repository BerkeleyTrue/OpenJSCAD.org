const test = require('ava')
const { multiply } = require('./index')

const { compareVectors } = require('../../../test/helpers/index')

test('mat4: multiply() should return a new mat4 with correct values', (t) => {
  const obs1 = multiply([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  t.true(compareVectors(obs1, [90, 100, 110, 120, 202, 228, 254, 280, 314, 356, 398, 440, 426, 484, 542, 600]))

  const obs2 = multiply([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16],
    [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16])
  t.true(compareVectors(obs2, [90, 100, 110, 120, 202, 228, 254, 280, 314, 356, 398, 440, 426, 484, 542, 600]))

  const obs3 = multiply([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16])
  t.true(compareVectors(obs3, [-90, -100, -110, -120, -202, -228, -254, -280, -314, -356, -398, -440, -426, -484, -542, -600]))
})

test('mat4: multiply() called with out parameter should return a new mat4 with correct values', (t) => {
  const obs1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const ret1 = multiply(obs1,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  t.true(compareVectors(obs1, [90, 100, 110, 120, 202, 228, 254, 280, 314, 356, 398, 440, 426, 484, 542, 600]))
  t.true(compareVectors(ret1, [90, 100, 110, 120, 202, 228, 254, 280, 314, 356, 398, 440, 426, 484, 542, 600]))

  const obs2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const ret2 = multiply(obs2,
    [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16],
    [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16])
  t.true(compareVectors(obs2, [90, 100, 110, 120, 202, 228, 254, 280, 314, 356, 398, 440, 426, 484, 542, 600]))
  t.true(compareVectors(ret2, [90, 100, 110, 120, 202, 228, 254, 280, 314, 356, 398, 440, 426, 484, 542, 600]))

  const obs3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const ret3 = multiply(obs3,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16])
  t.true(compareVectors(obs3, [-90, -100, -110, -120, -202, -228, -254, -280, -314, -356, -398, -440, -426, -484, -542, -600]))
  t.true(compareVectors(ret3, [-90, -100, -110, -120, -202, -228, -254, -280, -314, -356, -398, -440, -426, -484, -542, -600]))
})
