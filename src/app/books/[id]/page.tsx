import { IBook } from "@/types/books.type";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }
  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  );

  console.log(book);
  return <div>Book Details page</div>;
};

export default BookDetailsPage;
