import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
interface IBookCardProps {
  book: IBook;
}
const BookCard = ({ book }: IBookCardProps) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = book;
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {" "}
      {/* Image */}{" "}
      <div className="relative overflow-hidden bg-slate-100 p-5">
        {" "}
        {/* Category Badge */}{" "}
        <span className="absolute left-7 top-7 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow">
          {" "}
          {category}{" "}
        </span>{" "}
        <div className="flex h-72 items-center justify-center overflow-hidden rounded-xl">
          {" "}
          <Image
            src={image}
            alt={bookName}
            width={250}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />{" "}
        </div>{" "}
      </div>{" "}
      {/* Content */}{" "}
      <div className="relative p-5">
        {" "}
        {/* Rating - Top Right */}{" "}
        <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1">
          {" "}
          <span className="text-sm">⭐</span>{" "}
          <span className="text-sm font-bold text-slate-800">
            {" "}
            {rating}{" "}
          </span>{" "}
        </div>{" "}
        {/* Tags */}{" "}
        <div className="mb-3 flex flex-wrap gap-2 pr-20">
          {" "}
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
            >
              {" "}
              {tag}{" "}
            </span>
          ))}{" "}
        </div>{" "}
        {/* Book Name */}{" "}
        <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-green-600">
          {" "}
          {bookName}{" "}
        </h2>{" "}
        {/* Author */}{" "}
        <p className="mt-1 text-sm text-slate-500">
          {" "}
          by <span className="font-medium text-slate-700">{author}</span>{" "}
        </p>{" "}
        {/* Book Information */}{" "}
        <div className="mt-4 grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
          {" "}
          <div>
            {" "}
            <p className="text-xs text-slate-400">Pages</p>{" "}
            <p className="font-semibold text-slate-700">{totalPages}</p>{" "}
          </div>{" "}
          <div>
            {" "}
            <p className="text-xs text-slate-400">Published</p>{" "}
            <p className="font-semibold text-slate-700">
              {" "}
              {yearOfPublishing}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Full Width View Details Button */}{" "}
        <Link
          href={`/books/${bookId}`}
          className="mt-4 flex w-full items-center justify-center rounded-lg border border-green-500 px-4 py-2.5 text-sm font-semibold text-green-600 transition-all duration-200 hover:bg-green-500 hover:text-white"
        >
          {" "}
          View Details{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};
export default BookCard;
