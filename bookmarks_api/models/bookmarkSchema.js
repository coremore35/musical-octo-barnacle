const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  makeEdit: { type: Boolean, default: false }
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);
