const mongoose = require('mongoose')

const screenshotSchema = new mongoose.Schema({
  image: Buffer,
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Screenshot', screenshotSchema)
