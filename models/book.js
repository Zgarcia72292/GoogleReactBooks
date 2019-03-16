const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String},
  authors: { type: String},
  summary: { type: String},
  link: { type: String},
  // _id: {type: bookSchema.ObjectId}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
