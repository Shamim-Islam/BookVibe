import React from "react";
import { IBook } from "@/types/books.type";
import BookCard from './../components/homepage/BookCard';

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }
  return res.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <div className="container mx-auto my-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Explore All Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {booksData.map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
