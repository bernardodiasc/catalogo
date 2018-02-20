const path = require('path')

/**
 * Cities content type translation
 * @param  {Array} content      List of files
 * @param  {String} contentType Content type name
 * @return {Object}             The cities content type data object
 */
function cities (content, contentType) {
  let output = {}
  const allFiles = content.filter(each => each.dir.includes(`/${contentType}`))
  const index = allFiles.filter(each => each.base === 'index.md')[0]
  index.attr.forEach(each => {
    Object.keys(each).forEach(key => {
      const allFilesForEach = allFiles.filter(file =>
        file.dir.includes(`/${contentType}/${key}`)
      )
      output[key] = {}
      allFilesForEach.forEach(file => {
        if (file.dir.includes(`/${contentType}/${key}`)) {
          output[key][file.base] = file
        }
      })
    })
  })
  return output
}

/**
 * Advertisers content type translation
 * @param  {Array} content      List of files
 * @param  {String} contentType Content type name
 * @return {Object}             The advertisers content type data object
 */
function advertisers (content, contentType) {
  let output = {}
  const allFiles = content.filter(each => each.dir.includes(`/${contentType}`))
  const index = allFiles.filter(each => each.base === 'index.md')[0]
  index.attr.forEach(each => {
    Object.keys(each).forEach(key => {
      const allFilesForEach = allFiles.filter(file =>
        file.dir.includes(`/${contentType}/${key}`)
      )
      output[key] = {}
      allFilesForEach.forEach(file => {
        if (file.dir.includes(`/${contentType}/${key}`)) {
          output[key][file.base] = file
        }
      })
    })
  })
  return output
}

/**
 * Configuration
 * @type {Object}
 */
const config = {
  content: path.resolve(__dirname, '..', '..', 'public', 'content'),
  output: path.resolve(__dirname, '..', 'data.json'),
  include: ['.md', '.png'],
  exclude: ['README.md'],
  contentTypes: [
    { cities },
    { advertisers },
  ]
}

module.exports = config
