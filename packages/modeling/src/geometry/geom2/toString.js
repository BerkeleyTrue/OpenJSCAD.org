const vec2 = require('../../math/vec2')

const toSides = require('./toSides')

/**
 * Create a string representing the contents of the given geometry.
 * @param {geom2} geometry - the geometry
 * @returns {String} a representive string
 * @alias module:modeling/geometry/geom2.toString
 *
 * @example
 * console.out(toString(geometry))
 */
const toString = function (geometry) {
  const sides = toSides(geometry)
  let result = 'geom2 (' + sides.length + ' sides):\n[\n'
  sides.forEach((side) => {
    result += '  [' + vec2.toString(side[0]) + ', ' + vec2.toString(side[1]) + ']\n'
  })
  result += ']\n'
  return result
}

module.exports = toString
