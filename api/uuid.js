const namespace = require('uuid/v5')
const timestamp = require('uuid/v1')
const random = require('uuid/v4')

module.exports = () => namespace( random(), timestamp() )
