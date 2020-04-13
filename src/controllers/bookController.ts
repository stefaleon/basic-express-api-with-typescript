import { Request, Response } from 'express';
import Book from './../book';

export let allBooks = (req: Request, res: Response) => {
  let books = Book.find((err: any, books: any) => {
    if (err) {
      res.send('Error!');
    } else {
      res.send(books);
    }
  });
};

export let getBook = (req: Request, res: Response) => {
  res.send('Returns one book');
};

export let deleteBook = (req: Request, res: Response) => {
  res.send('Returns one book');
};

export let updateBook = (req: Request, res: Response) => {
  res.send('Returns one book');
};

export let addBook = (req: Request, res: Response) => {
  res.send('Returns one book');
};
