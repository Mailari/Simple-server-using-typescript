import { Request, Response } from 'express';

import Book from './../book';
import { isObject } from 'util';
import { ObjectID } from 'bson';

export let allBooks = (req: Request, res: Response) => {
    let books = Book.find((err: any, data: any) => {
        err ? res.send(err) : res.send(data);
    })
}


export let addBook = (req: Request, res: Response) => {
    let book = new Book(req.body);
    book.save((err: any, data: any) => {
        err ? res.send(err) : res.send(data);
    })
}

export let deletebook = (req: Request, res: Response) => {
    Book.deleteOne({ _id: req.params.id }, (err: any) => {
        err ? res.send(err) : res.send({ "message": "deleted" });
    })
}

export let updatebook = (req: Request, res: Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, data: any) => {
        err ? res.send(err) : res.send(data);
    })
}

export let getBook = (req: Request, res: Response) => {

    Book.find({ _id: req.params.id }, (err: any, data: any) => {
        err ? res.send(err) : res.send(data);
    })
}