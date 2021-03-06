const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: false,
  },
  yearPublished: {
    type: Number,
    required: false,
  },
  practice: {
    type: String,
    required: false,
  },
  claims: {
    type: [String],
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  sourcedb: {
    type: String,
    required: false,
  },
  doi: {
    type: String,
    required: false,
  },
  supportRating: {
    type: String,
    required: false,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
