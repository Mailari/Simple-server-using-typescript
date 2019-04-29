import * as express from "express";

import * as bodyParser from "body-parser";
import * as bookController from "./controller/bookController";
const app = express();

app.set("port", 3000);
app.use(bodyParser.json());

app.listen(app.get("port"), () => {
    console.log("server is on port ", app.get("port"));
});

app.get('/books', bookController.allBooks);
app.get('/book/:id', bookController.getBook);
app.delete('/book/:id', bookController.deletebook);
app.post('/book/:id', bookController.updatebook);
app.put('/book', bookController.addBook);

