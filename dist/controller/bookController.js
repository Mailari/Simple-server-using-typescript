"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./../book");
exports.allBooks = (req, res) => {
    let books = book_1.default.find((err, data) => {
        err ? res.send(err) : res.send(data);
    });
};
exports.addBook = (req, res) => {
    let book = new book_1.default(req.body);
    book.save((err, data) => {
        err ? res.send(err) : res.send(data);
    });
};
exports.deletebook = (req, res) => {
    book_1.default.deleteOne({ _id: req.params.id }, (err) => {
        err ? res.send(err) : res.send({ "message": "deleted" });
    });
};
exports.updatebook = (req, res) => {
    book_1.default.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        err ? res.send(err) : res.send(data);
    });
};
exports.getBook = (req, res) => {
    book_1.default.find({ _id: req.params.id }, (err, data) => {
        err ? res.send(err) : res.send(data);
    });
};
//# sourceMappingURL=bookController.js.map