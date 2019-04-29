"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const bookController = require("./controller/bookController");
exports.app = express();
exports.app.set("port", 3100);
exports.app.use(bodyParser.json());
exports.app.listen(exports.app.get("port"), () => {
    console.log("server is on port ", exports.app.get("port"));
});
exports.app.get('/books', bookController.allBooks);
exports.app.get('/book/:id', bookController.getBook);
exports.app.delete('/book/:id', bookController.deletebook);
exports.app.post('/book/:id', bookController.updatebook);
exports.app.put('/book', bookController.addBook);
//# sourceMappingURL=app.js.map