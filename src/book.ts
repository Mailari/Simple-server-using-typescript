import * as mongoose from "mongoose";

const uri: string = "mongodb://localhost/27017";

mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
    if (err) {
        console.log("error in connection of mongo db");
    } else {
        console.log("db connection estblished");

    }
})

export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true }
});

const Book = mongoose.model('Book', BookSchema);

export default Book;