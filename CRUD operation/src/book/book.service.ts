/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';

@Injectable()
export class BookService {
  // a array containing all data has type of Book interface
  public books: Book[] = [];

  // add
  addBookService(book: Book): string {
    this.books.push(book);
    return 'Book has been sucessfully added';
  }

  // update
  updateBookService(book: Book): string {
    const index = this.books.findIndex((ele) => {
      return ele.id === book.id;
    });
    this.books[index] = book;
    return 'Book has been sucessfully update';
  }

  // delete
  deleteBookService(bookId: string): string {
    this.books = this.books.filter((ele) => {
      return ele.id != bookId;
    });
    return 'Book has been deleted';
  }

  // find all
  findAllBook(): Book[] {
    return this.books;
  }
}
