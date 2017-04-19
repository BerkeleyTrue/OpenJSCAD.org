import oscad from '@jscad/scad-api'
import { convertToBlob } from './io/convertToBlob'
import { rebuildSolid } from './core/rebuildSolid'
import { resolveIncludesFs } from './utils/resolveIncludesFs'
/**
 * compile openjscad code and generates intermediate representation
 * ordering of parameters created with curying in mind
 * @param  {String} source the openjscad script we want to compile
 * @param  {Object} params the set of parameters to use for the script  (optional)
 * @param  {Object} options the set of options to use (optional)
 * @param options.implicitGlobals whether to use implicit globals or not : this exports the CSG functions to the 'global' scope
 * @param options.rootPath when dealing with source which uses 'include' statements, where is the root directory
 @return a promise that gets resolved with the CSG /CAG ojbect(s)
 */
function compile (source, params, options) {
  params = params || {}
  const defaults = {
    implicitGlobals: true,
    rootPath: ''
  }
  options = Object.assign({}, defaults, options)
  const {implicitGlobals, rootPath} = options

  let globals = {}
  if (implicitGlobals) {
    globals.oscad = oscad
  }

  return new Promise(function (resolve, reject) {
    const callback = (err, result) => {
      if (!err) { return resolve(result) }
      reject(err)
    }
    rebuildSolid(source, rootPath, params, callback, {implicitGlobals, globals, includeResolver: resolveIncludesFs})
  })
}

/**
 * generate output file from a CSG/CAG object or array of CSG/CAG objects
 * @param  {String} outputFormat the output file format
 * @param  {Object} objects the CSG/CAG object or array of CSG/CAG objects
 */
function generateOutput (outputFormat, objects) {
  return convertToBlob(objects, {format: outputFormat, formatInfo: {convertCAG: true, convertCSG: true}})
}

module.exports = {generateOutput, compile}
