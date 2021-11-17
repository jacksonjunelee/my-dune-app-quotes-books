import React from 'react'
import Book from './Book';

export default function BookList({books, handleOnClickSelectedBook}) {
    return (
        <div className="book-list">
        <h1>Books</h1>
          {books.map((book) => {
            return (
              <Book
                key={book.id}
                {...book}
                handleOnClickSelectedBook={handleOnClickSelectedBook}
              />
            );
          })}
        </div>
      );
}
