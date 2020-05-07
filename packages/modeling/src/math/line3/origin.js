/**
 * Return the origin of the given line.
 *
 * @param {line3} line - the line of reference
 * @return {vec3} the origin of the line
 * @alias module:modeling/math/line3.origin
 */
const origin = (line) => {
  return line[0]
}

module.exports = origin
