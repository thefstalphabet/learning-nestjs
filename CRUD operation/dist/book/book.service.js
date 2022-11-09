"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
let BookService = class BookService {
    constructor() {
        this.books = [];
    }
    addBookService(book) {
        this.books.push(book);
        return 'Book has been sucessfully added';
    }
    updateBookService(book) {
        const index = this.books.findIndex((ele) => {
            return ele.id === book.id;
        });
        this.books[index] = book;
        return 'Book has been sucessfully update';
    }
    deleteBookService(bookId) {
        this.books = this.books.filter((ele) => {
            return ele.id != bookId;
        });
        return 'Book has been deleted';
    }
    findAllBook() {
        return this.books;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map