"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uri = "mongodb://localhost/27017";
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("error in connection of mongo db");
    }
    else {
        console.log("db connection estblished");
    }
});
exports.BookSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true }
});
const Book = mongoose.model('Book', exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=book.js.map