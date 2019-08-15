const mongoose = require('mongoose')

const bookmarkSchema = mongoose.Schema({
    title: string,
    url: string
})

module.exports = mongoose.model('Bookmark', bookmarkSchema)